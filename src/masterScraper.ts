
import { chromium, Browser, Page } from 'playwright';
import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

// Interfaces
interface SiteConfig {
    url: string;
    match?: RegExp;
    language?: string;
    articleLinkSelector: string;
    nextPageSelector?: string | null;
    titleSelector: string | string[];
    contentSelector: string | string[];
    dateSelector: string | string[];
    authorSelector: string | string[];
    removeSelector: string[];
}

interface Article {
    source: string;
    title: string;
    url: string;
    content: string;
    published_at: string;
    author: string;
}

// User Agents for rotation
const USER_AGENTS = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0'
];

const getRandomUserAgent = () => USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const randomDelay = () => delay(3000 + Math.random() * 2000); // 3-5 seconds

// Helper to normalize selectors
const getSelector = (sel: string | string[] | undefined): string[] => {
    if (!sel) return [];
    return Array.isArray(sel) ? sel : [sel];
};

// Data Cleaning
const cleanText = (text: string): string => {
    return text.replace(/\s+/g, ' ').trim();
};

const cleanContent = ($: cheerio.CheerioAPI, contentSel: string[], removeSel: string[]): string => {
    // We need to select the elements, clone them to not affect the original doc if we were reusing it (we aren't),
    // remove unwanted elements, and then extract text.
    // However, cheerio selection returns a Cheerio object.

    let fullText = '';

    // Strategy: Select the content container(s), then remove unwanted children, then get text.
    // But contentSel might be multiple selectors for different parts.
    // Or it might be a list of fallback selectors.
    // The prompt implies "Content: .post-content p" which means paragraphs inside .post-content.

    // Let's try to find the first matching selector for content container
    // But the config has `contentSelector` as `['.entry-content p', ...]`
    // This implies we should select all these and join them? Or fallbacks?
    // Usually in these configs it's fallbacks or multiple parts.
    // Given the prompt "Content: .post-content p", it likely means "all p tags inside .post-content".

    for (const sel of contentSel) {
        const elements = $(sel);
        if (elements.length > 0) {
            elements.each((_, el) => {
                const elCheerio = $(el);
                // Remove unwanted
                for (const rSel of removeSel) {
                    elCheerio.find(rSel).remove();
                }
                fullText += elCheerio.text() + ' ';
            });
        }
    }

    return cleanText(fullText);
};

// --- Scraper Functions ---

async function scrapeDynamicSite(name: string, config: SiteConfig): Promise<Article[]> {
    console.log(`Starting ${name} scraper (Playwright)...`);
    const articles: Article[] = [];
    const browser = await chromium.launch({
        headless: true,
        args: [
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const context = await browser.newContext({ userAgent: getRandomUserAgent() });
    const page = await context.newPage();

    // Stealth: Remove webdriver property
    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined,
        });
    });

    // Stealth: Add headers
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    });

    try {
        await page.goto(config.url, { waitUntil: 'domcontentloaded' });
        await randomDelay();

        // Handle pagination (just scrape first page for now, or loop if needed. Prompt says "Follow 'Next' or increment URL")
        // Let's try to scrape 2 pages.
        const pagesToScrape = 2;

        for (let i = 0; i < pagesToScrape; i++) {
            console.log(`Scraping page ${i + 1}...`);

            // Wait for articles to load
            await page.waitForSelector(config.articleLinkSelector, { timeout: 10000 }).catch(() => console.log('Timeout waiting for articles'));

            // Get article links
            const links = await page.$$eval(config.articleLinkSelector, (els) => els.map(e => (e as HTMLAnchorElement).href));
            const uniqueLinks = [...new Set(links)];
            console.log(`Found ${uniqueLinks.length} articles.`);

            for (const link of uniqueLinks) {
                if (articles.length >= 10) break; // Limit for demo
                try {
                    console.log(`Scraping article: ${link}`);
                    const articlePage = await context.newPage();
                    await articlePage.goto(link, { waitUntil: 'domcontentloaded' });
                    await randomDelay();

                    // Extract details
                    // Title
                    const titleSel = getSelector(config.titleSelector)[0];
                    const title = await articlePage.textContent(titleSel).catch(() => '');

                    // Date
                    const dateSel = getSelector(config.dateSelector)[0];
                    const date = await articlePage.getAttribute(dateSel, 'datetime').catch(() =>
                        articlePage.textContent(dateSel).catch(() => '')
                    );

                    // Author
                    const authorSel = getSelector(config.authorSelector)[0];
                    const author = await articlePage.textContent(authorSel).catch(() => '');

                    // Content
                    // For content, we need to be careful to remove ads.
                    // We can evaluate in browser or get HTML and use cheerio. Cheerio is easier for cleaning.
                    const contentHtml = await articlePage.content();
                    const $ = cheerio.load(contentHtml);

                    // Remove unwanted
                    for (const rSel of config.removeSelector) {
                        $(rSel).remove();
                    }

                    const content = cleanContent($, getSelector(config.contentSelector), []); // Already removed globally

                    if (title && content) {
                        articles.push({
                            source: name,
                            title: cleanText(title || ''),
                            url: link,
                            content: content,
                            published_at: cleanText(date || ''),
                            author: cleanText(author || '')
                        });
                    }
                    await articlePage.close();
                } catch (err) {
                    console.error(`Error scraping ${link}:`, err);
                }
            }

            // Next page logic
            if (i < pagesToScrape - 1) {
                // Construct next page URL. 
                // Assume /page/N structure, ensure slash
                const baseUrl = config.url.endsWith('/') ? config.url : `${config.url}/`;
                const nextUrl = `${baseUrl}page/${i + 2}`; // Page 1 is base, Page 2 is /page/2
                await page.goto(nextUrl, { waitUntil: 'domcontentloaded' });
                await randomDelay();
            }
        }

    } catch (err) {
        console.error('Error in CoinTelegraph scraper:', err);
    } finally {
        await browser.close();
    }
    return articles;
}

async function scrapeStaticSite(name: string, config: SiteConfig): Promise<Article[]> {
    console.log(`Starting ${name} scraper (Static)...`);
    const articles: Article[] = [];
    const pagesToScrape = 2;

    for (let i = 0; i < pagesToScrape; i++) {
        let url = config.url;
        if (i > 0) {
            // Assume /page/N structure, ensure slash
            const baseUrl = config.url.endsWith('/') ? config.url : `${config.url}/`;
            url = `${baseUrl}page/${i + 1}/`;
        }

        console.log(`Fetching ${url}...`);
        try {
            const response = await axios.get(url, {
                headers: { 'User-Agent': getRandomUserAgent() },
                timeout: 10000
            });

            const $ = cheerio.load(response.data);
            const links: string[] = [];
            $(config.articleLinkSelector).each((_, el) => {
                const href = $(el).attr('href');
                if (href) {
                    try {
                        const absoluteUrl = new URL(href, config.url).href;
                        links.push(absoluteUrl);
                    } catch (e) {
                        console.warn(`Invalid URL: ${href}`);
                    }
                }
            });
            const uniqueLinks = [...new Set(links)];
            console.log(`Found ${uniqueLinks.length} articles.`);

            await randomDelay();

            for (const link of uniqueLinks) {
                if (articles.length >= 10) break;
                try {
                    console.log(`Scraping article: ${link}`);
                    const artRes = await axios.get(link, {
                        headers: { 'User-Agent': getRandomUserAgent() },
                        timeout: 10000
                    });
                    const $$ = cheerio.load(artRes.data);

                    // Remove unwanted
                    for (const rSel of config.removeSelector) {
                        $$(rSel).remove();
                    }

                    const title = $$(getSelector(config.titleSelector)[0]).text();
                    const date = $$(getSelector(config.dateSelector)[0]).text();
                    const author = $$(getSelector(config.authorSelector)[0]).text();
                    const content = cleanContent($$, getSelector(config.contentSelector), []);

                    if (title && content) {
                        articles.push({
                            source: name,
                            title: cleanText(title),
                            url: link,
                            content: content,
                            published_at: cleanText(date),
                            author: cleanText(author)
                        });
                    }
                    await randomDelay();
                } catch (err) {
                    console.error(`Error scraping ${link}:`, err);
                }
            }

        } catch (err) {
            console.error(`Error fetching ${url}:`, err);
        }
    }

    return articles;
}

// --- Main ---

import * as readline from 'readline';

function promptUser(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer.trim());
        });
    });
}

async function main() {
    const dataDir = path.join(__dirname, '../data');
    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

    // Load configs
    const ctConfig = (await import('../sites/cointelegraph')).default as SiteConfig;
    const cpConfig = (await import('../sites/coinpedia')).default as SiteConfig;
    const cgConfig = (await import('../sites/coingape')).default as SiteConfig;

    // New Sites
    const b99Config = (await import('../sites/blockworks')).default as SiteConfig;
    const ambConfig = (await import('../sites/ambcrypto')).default as SiteConfig;
    const arabConfig = (await import('../sites/arab-btc')).default as SiteConfig;
    const beinConfig = (await import('../sites/beincrypto')).default as SiteConfig;
    const binanceConfig = (await import('../sites/binance')).default as SiteConfig;
    const catenaaConfig = (await import('../sites/catenaa')).default as SiteConfig;
    const coincuConfig = (await import('../sites/coincu')).default as SiteConfig;
    const coindeskConfig = (await import('../sites/coindesk')).default as SiteConfig;
    const coindooConfig = (await import('../sites/coindoo')).default as SiteConfig;
    const criptoConfig = (await import('../sites/criptonoticias')).default as SiteConfig;
    const cdnesConfig = (await import('../sites/cryptodnes')).default as SiteConfig;
    const cintelConfig = (await import('../sites/cryptointelligence')).default as SiteConfig;
    const cnomistConfig = (await import('../sites/cryptonomist')).default as SiteConfig;
    const cpolitanConfig = (await import('../sites/cryptopolitan')).default as SiteConfig;
    const cpotatoConfig = (await import('../sites/cryptopotato')).default as SiteConfig;
    const decryptConfig = (await import('../sites/decrypt')).default as SiteConfig;
    const jpCtConfig = (await import('../sites/jp.cointelegraph')).default as SiteConfig;
    const blockConfig = (await import('../sites/theblock')).default as SiteConfig;
    const coinRepConfig = (await import('../sites/thecoinrepublic')).default as SiteConfig;

    const configs = [
        { name: 'CoinTelegraph', config: ctConfig, runner: (cfg: SiteConfig) => scrapeDynamicSite('CoinTelegraph', cfg) },
        { name: 'Coinpedia', config: cpConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Coinpedia', cfg) },
        { name: 'CoinGape', config: cgConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('CoinGape', cfg) },

        // New Sites
        { name: '99Bitcoins', config: b99Config, runner: (cfg: SiteConfig) => scrapeDynamicSite('99Bitcoins', cfg) },
        { name: 'AMBCrypto', config: ambConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('AMBCrypto', cfg) },
        { name: 'ArabBTC', config: arabConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('ArabBTC', cfg) },
        { name: 'BeInCrypto', config: beinConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('BeInCrypto', cfg) },
        { name: 'Binance', config: binanceConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Binance', cfg) },
        { name: 'Catenaa', config: catenaaConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Catenaa', cfg) },
        { name: 'Coincu', config: coincuConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Coincu', cfg) },
        { name: 'CoinDesk', config: coindeskConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('CoinDesk', cfg) },
        { name: 'Coindoo', config: coindooConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Coindoo', cfg) },
        { name: 'CriptoNoticias', config: criptoConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('CriptoNoticias', cfg) },
        { name: 'CryptoDnes', config: cdnesConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('CryptoDnes', cfg) },
        { name: 'CryptoIntelligence', config: cintelConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('CryptoIntelligence', cfg) },
        { name: 'Cryptonomist', config: cnomistConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Cryptonomist', cfg) },
        { name: 'Cryptopolitan', config: cpolitanConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('Cryptopolitan', cfg) },
        { name: 'CryptoPotato', config: cpotatoConfig, runner: (cfg: SiteConfig) => scrapeDynamicSite('CryptoPotato', cfg) },
        { name: 'Decrypt', config: decryptConfig, runner: (cfg: SiteConfig) => scrapeDynamicSite('Decrypt', cfg) },
        { name: 'JPCoinTelegraph', config: jpCtConfig, runner: (cfg: SiteConfig) => scrapeDynamicSite('JPCoinTelegraph', cfg) },
        { name: 'TheBlock', config: blockConfig, runner: (cfg: SiteConfig) => scrapeDynamicSite('TheBlock', cfg) },
        { name: 'TheCoinRepublic', config: coinRepConfig, runner: (cfg: SiteConfig) => scrapeStaticSite('TheCoinRepublic', cfg) }
    ];

    const allArticles: Article[] = [];

    console.log("Enter a website URL to scrape (or press Enter to scrape all):");
    const inputUrl = await promptUser("> ");

    if (inputUrl) {
        console.log(`Checking support for: ${inputUrl}`);
        let matched = false;
        for (const { name, config, runner } of configs) {
            if (config.match && config.match.test(inputUrl)) {
                console.log(`Matched ${name}! Starting scraper...`);
                // Create a config copy with the specific URL if needed, or just use the base config but override URL?
                // The prompt says "extract the latest news file", usually implying the category page.
                // But if the user provides a specific URL, maybe they want just that page?
                // The prompt says "Enter the website link and then start the process".
                // If they enter "https://cointelegraph.com/category/latest-news", it matches.
                // If they enter "https://cointelegraph.com", it matches.
                // Let's assume we use the config's URL for the scraping (category page) but we filter by site.
                // OR, if the user wants to scrape a specific ARTICLE, that's different.
                // The original request was "Extract the latest cryptocurrency news articles... Return a structured JSON list".
                // So likely the user just wants to trigger the scraping for that SITE.
                // I will stick to running the scraper for that SITE using the config's URL (category page).
                // If the user input IS the category URL, great. If it's just the homepage, we still scrape the category page defined in config.

                const articles = await runner(config);
                allArticles.push(...articles);
                matched = true;
                break;
            }
        }

        if (!matched) {
            console.error("URL not supported or no matching scraper found.");
            process.exit(1);
        }

    } else {
        console.log("No URL provided. Scraping ALL sites...");
        for (const { name, config, runner } of configs) {
            const articles = await runner(config);
            allArticles.push(...articles);
        }
    }

    // Save
    const outputPath = path.join(dataDir, 'latest_news.json');
    fs.writeFileSync(outputPath, JSON.stringify(allArticles, null, 2));
    console.log(`Saved ${allArticles.length} articles to ${outputPath}`);
}

main().catch(console.error);
