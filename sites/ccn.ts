export default {
    // 1. Core Configuration
    url: 'https://www.ccn.com/crypto/',
    match: /ccn\.com\//,
    language: "en-US",

    // 2. List Page Selector
    articleLinkSelector: 'a[href*="/crypto/"]',

    // 3. Article Page Selectors
    titleSelector: 'h1._title',
    authorSelector: '._by a',
    dateSelector: 'time[datetime]',

    // Content: Simplified to a single robust container as per client request
    contentSelector: '.ccn-single.parsed',

    // 4. Cleaning
    removeSelector: [
        '._clear',
        '.ccn-ads',
        'script',
        'style',
        'span:contains("Also read:")'
    ]
};