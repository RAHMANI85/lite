import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import axios from 'axios';
import { load, CheerioAPI } from 'cheerio';

interface SiteConfig {
  url: string;
  match?: RegExp;
  language?: string;
  articleLinkSelector?: string;
  nextPageSelector?: string;
  titleSelector?: string[];
  contentSelector?: string[];
  dateSelector?: string[];
  authorSelector?: string[];
  removeSelector?: string[];
}

type SelectorResult = {
  selectors: string[];
  found: boolean;
  samples?: string[];
  note?: string;
};

type Output = {
  site: string;
  url: string;
  fetchedAt: string;
  httpStatus?: number;
  results: {
    articleLinkSelector: SelectorResult;
    nextPageSelector: SelectorResult;
    titleSelector: SelectorResult;
    contentSelector: SelectorResult;
    dateSelector: SelectorResult;
    authorSelector: SelectorResult;
    removeSelector: SelectorResult;
  };
  error?: string;
};

const baseDir = path.resolve(__dirname, '..');

function normalizeSelectors(sel?: string | string[]): string[] {
  if (!sel) return [];
  return Array.isArray(sel) ? sel.filter(Boolean) : [sel];
}

function takeSamples(values: string[], limit = 5): string[] {
  const uniq = Array.from(new Set(values.filter(Boolean)));
  if (uniq.length <= limit) return uniq;
  return uniq.slice(0, limit);
}

function collectText($: CheerioAPI, selectors: string[], limit = 5): SelectorResult {
  const matches: string[] = [];
  for (const sel of selectors) {
    const nodes = $(sel);
    nodes.each((_, el) => {
      if (matches.length >= limit) return false;
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (text) matches.push(text);
      return undefined;
    });
    if (matches.length >= limit) break;
  }
  return { selectors, found: matches.length > 0, samples: takeSamples(matches, limit) };
}

function collectLinks($: CheerioAPI, selector: string | undefined, limit = 10): SelectorResult {
  const selectors = normalizeSelectors(selector);
  const matches: string[] = [];
  for (const sel of selectors) {
    const nodes = $(sel);
    nodes.each((_, el) => {
      if (matches.length >= limit) return false;
      const href = $(el).attr('href');
      const text = $(el).text().replace(/\s+/g, ' ').trim();
      if (href) {
        matches.push(href);
      } else if (text) {
        matches.push(text);
      }
      return undefined;
    });
    if (matches.length >= limit) break;
  }
  return { selectors, found: matches.length > 0, samples: takeSamples(matches, limit) };
}

function checkExists($: CheerioAPI, selectors: string[]): SelectorResult {
  for (const sel of selectors) {
    if ($(sel).length) {
      return { selectors, found: true };
    }
  }
  return { selectors, found: false };
}

async function loadSiteConfig(siteKey: string): Promise<SiteConfig> {
  const tsPath = path.join(baseDir, 'sites', `${siteKey}.ts`);
  const jsPath = path.join(baseDir, 'sites', `${siteKey}.js`);
  const target = fs.existsSync(tsPath) ? tsPath : (fs.existsSync(jsPath) ? jsPath : null);
  if (!target) {
    throw new Error(`Site config not found for ${siteKey}`);
  }
  let mod: any;
  try {
    // Prefer require so ts-node CJS resolution works smoothly on Windows paths
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    mod = require(target);
  } catch (_) {
    // Fallback to dynamic import if needed
    mod = await import(pathToFileURL(target).href);
  }
  const cfg: SiteConfig = (mod && (mod.default || mod)) as SiteConfig;
  if (!cfg || !cfg.url) {
    throw new Error(`Site config for ${siteKey} is missing a url`);
  }
  return cfg;
}

async function fetchHtml(url: string): Promise<{ status: number; html: string; }> {
  const response = await axios.get<string>(url, {
    headers: {
      'User-Agent': 'ScraperLite/1.0 (+https://example.com)',
      'Accept': 'text/html,application/xhtml+xml'
    },
    timeout: 20000
  });
  return { status: response.status, html: response.data };
}

async function run() {
  const siteKey = process.argv[2];
  if (!siteKey) {
    console.error('Usage: npm run site -- <site>');
    process.exit(1);
  }

  let cfg: SiteConfig;
  try {
    cfg = await loadSiteConfig(siteKey);
  } catch (err: any) {
    console.error(err?.message || err);
    process.exit(1);
    return;
  }

  const output: Output = {
    site: siteKey,
    url: cfg.url,
    fetchedAt: new Date().toISOString(),
    results: {
      articleLinkSelector: { selectors: normalizeSelectors(cfg.articleLinkSelector), found: false },
      nextPageSelector: { selectors: normalizeSelectors(cfg.nextPageSelector), found: false, note: 'only reports presence' },
      titleSelector: { selectors: normalizeSelectors(cfg.titleSelector), found: false },
      contentSelector: { selectors: normalizeSelectors(cfg.contentSelector), found: false },
      dateSelector: { selectors: normalizeSelectors(cfg.dateSelector), found: false },
      authorSelector: { selectors: normalizeSelectors(cfg.authorSelector), found: false },
      removeSelector: { selectors: normalizeSelectors(cfg.removeSelector), found: false },
    }
  };

  let html: string | null = null;
  try {
    const res = await fetchHtml(cfg.url);
    output.httpStatus = res.status;
    html = res.html;
  } catch (err: any) {
    output.error = err?.message || 'Failed to fetch HTML';
  }

  if (html) {
    const $ = load(html);
    output.results.articleLinkSelector = collectLinks($, cfg.articleLinkSelector);
    output.results.nextPageSelector = checkExists($, normalizeSelectors(cfg.nextPageSelector));
    output.results.titleSelector = collectText($, normalizeSelectors(cfg.titleSelector));
    output.results.contentSelector = collectText($, normalizeSelectors(cfg.contentSelector), 3);
    output.results.dateSelector = collectText($, normalizeSelectors(cfg.dateSelector));
    output.results.authorSelector = collectText($, normalizeSelectors(cfg.authorSelector));
    output.results.removeSelector = checkExists($, normalizeSelectors(cfg.removeSelector));
  }

  const dataDir = path.join(baseDir, 'data');
  fs.mkdirSync(dataDir, { recursive: true });
  const outPath = path.join(dataDir, `${siteKey}.json`);
  fs.writeFileSync(outPath, JSON.stringify(output, null, 2), 'utf8');
  console.log(`Saved selector report to ${outPath}`);

  if (output.error) process.exit(1);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
