export default {
    url: 'https://insidebitcoins.com/news/',
    match: /insidebitcoins\.com\/news\//,
    language: "en-US",


    articleLinkSelector: '.news-item-list ',


    titleSelector: 'h1.entry-title',
    authorSelector: '.author-name span',
    dateSelector: 'time.entry-date',


    contentSelector: '.entry-content',


    removeSelector: [
        '.telegrame_cta_content',
        '.global_key_disclaimer',
        '.inContentProviderSingle',
        '.c-TopAuthorBlock',
        '.ib-post-thumbnail-desktop',
        '.ib-post-thumbnail-mobile',
        'script',
        'style',
        'noscript',
        'iframe',
        '.wp-caption-text'
    ]
};