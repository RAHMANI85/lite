
import { chromium } from 'playwright';

async function debug() {
    const browser = await chromium.launch({
        headless: true,
        args: [
            '--disable-blink-features=AutomationControlled',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    });
    const context = await browser.newContext({
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    await page.addInitScript(() => {
        Object.defineProperty(navigator, 'webdriver', {
            get: () => undefined,
        });
    });

    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    });

    console.log('Navigating to CryptoPotato...');
    await page.goto('https://cryptopotato.com/crypto-news/', { waitUntil: 'domcontentloaded' });

    // Wait a bit
    await page.waitForTimeout(5000);

    const content = await page.content();
    console.log('Page Content Length:', content.length);

    // Check for selectors
    const links = await page.$$('.media-body h3 a, h2.heading-2 a');
    console.log('Links found:', links.length);

    if (links.length === 0) {
        console.log('Snippet of content:');
        console.log(content.substring(0, 500));
    }

    await browser.close();
}

debug().catch(console.error);
