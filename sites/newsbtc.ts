export default {
    // 1. Core Configuration
    url: 'https://www.newsbtc.com/news/',
    match: /newsbtc\.com\/news\//,
    language: "en-US",


    articleLinkSelector: 'h3.jeg_post_title a, .jeg_thumb a',


    titleSelector: 'h1.jeg_post_title',

    authorSelector: '.jeg_meta_author__name a',


    dateSelector: '.jeg_meta_date a, .jeg_meta_container div',


    contentSelector: 'ftwp-postcontent',

    // 4. Cleaning
    removeSelector: [
        '.related-news-title__related-news',
        '.related-reading__row',
        '.jeg_ad',
        '.ads-wrapper',
        '.article-text-banner',
        'script',
        'style'
    ]
};