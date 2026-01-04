export default {
    // 1. Core Configuration
    url: 'https://cryptobriefing.com/news/',
    match: /cryptobriefing\.com\//,
    language: "en-US",

    // 2. Article List Selectors (Used on /news/ or home page)
    // Targets article cards and post titles specifically within the news feed
    articleLinkSelector: '.title-wrap a',

    // 3. Article Page Selectors
    // Primary title of the article
    titleSelector: 'h1.title',

    // Author link inside the authors list container
    authorSelector: '.authors .list a.author',

    // Targets the standard <time> tag with a machine-readable datetime attribute
    dateSelector: 'time[datetime]',

    // Main content container. Supports multiple classes used by different post types
    contentSelector: '.article-content',

    // 4. Cleaning (remove unnecessary elements to ensure clean text extraction)
    removeSelector: [
        '.not-prose',         // Elements not part of the main article body
        '.article-ad',        // In-article advertisements
        '.ad-container',      // External ad wrappers
        '.related-posts',     // Internal links to other news
        '.newsletter-signup', // Email subscription boxes
        'hr',                 // Visual separators
        'script',             // Javascript code
        'style',              // CSS styling
        'footer'              // Page footer content
    ]
};