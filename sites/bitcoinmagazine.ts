export default {
    // 1. Core Configuration
    url: 'https://bitcoinmagazine.com/news/',
    match: /bitcoinmagazine\.com\//,
    language: "en-US",

    // 2. List Page Selector
    articleLinkSelector: 'a.td-image-wrap',


    // Title: Single robust selector for the headline
    titleSelector: '.tdb-title-text',

    // Author and Date: Direct selectors from the provided HTML
    authorSelector: '.tdb-author-name',
    dateSelector: '.td-module-date',

    // Content: Single powerful selector as per client's specific request
    // This targets the main container holding the entire article text
    contentSelector: '.tdb-post-content',

    // 4. Cleaning (Excluding unwanted elements)
    removeSelector: [
        '.bitco-mm_video_ad',
        '.bitco-mm_mobile_inconte1',
        '.bitco-mm_desktop_incontent1',
        '.molongui-post-byline',
        'script',
        'style'
    ]
};