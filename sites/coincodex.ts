export default {
    url: 'https://coincodex.com/news/',
    match: /coincodex\.com\/news\//,
    language: "en-US",

    articleLinkSelector: '.news-item a.title',

    titleSelector: 'header.article-title h1',
    authorSelector: 'a.article-author',
    dateSelector: 'time[datetime]',

    contentSelector: '.article-content.formatted-content',

    removeSelector: [
        '.key-takeaways',
        'app-text-to-speech',
        '.tweet_embed',
        'app-embed-image-zoom',
        'app-article-ogl-middle',
        '.recommended',
        'app-blocks',
        'script',
        'style',
        'noscript'
    ]
};