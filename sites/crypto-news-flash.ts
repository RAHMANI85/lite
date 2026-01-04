export default {
    url: 'https://www.crypto-news-flash.com/news/',
    match: /crypto-news-flash\.com\/.*\/news\//,
    language: "id-ID",


    articleLinkSelector: '.post-title a',

    titleSelector: '.entry-title',
    authorSelector: 's.author-link',
    dateSelector: '.post-date',

    contentSelector: '.post-content',

    removeSelector: [
        '.monsterinsights-dual-tracker',
        '.rank-math-breadcrumb',
        '.cmc-extra-info',
        '#coin-data-tp',
        '#coin-posts',
        '.tradingview-widget-container',
        'style',
        'script',
        'noscript'
    ]
};