export default {
    // 1. Core Configuration
    url: 'https://u.today/latest-cryptocurrency-news',
    match: /u\.today\//,
    language: "en-US",

    // 2. List Page Selector
    articleLinkSelector: 'a.article__title-link',

    // 3. Article Page Selectors

    // Title: Single robust selector for the main headline
    titleSelector: '.article__title',

    // Author and Date: Direct selectors based on the provided HTML
    authorSelector: '.author-brief__name a',
    dateSelector: '.article__short-date',

    // Content: Single powerful selector as per client request
    // This div wraps all paragraphs, links, and text within the article
    contentSelector: '.article__content',

    // 4. Cleaning (Excluding unwanted elements)
    removeSelector: [
        '.something',          // Removes advertisement blocks
        '.adsbygoogle',       // Removes Google AdSense units
        'script',
        'style',
        '.article__footer'    // Removes redundant footer info if present
    ]
};