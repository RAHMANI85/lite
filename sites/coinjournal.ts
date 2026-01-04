export default {
    url: 'https://coinjournal.net/news/',
    match: /coinjournal\.net\/news\//,
    language: "en-US",

    articleLinkSelector: 'a.post-card__title-link, .post-card a',

    titleSelector: 'h1.block.w-full',
    authorSelector: '.post-article-author-name, .author-link',
    dateSelector: '.post-article-date, time',

    contentSelector: '.post-article-content',

    removeSelector: [
        '.post-article-image',
        '.post-meta',
        '.share',
        '.tags',
        'hr',
        'script',
        'style',
        'noscript'
    ]
};