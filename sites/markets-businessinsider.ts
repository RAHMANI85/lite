export default {
    // هذا هو السطر الناقص الذي يسبب الخطأ
    url: 'https://markets.businessinsider.com/',

    match: /businessinsider\.com\/news\/stocks\/.+/,
    titleSelector: 'h1.headline',
    contentSelector: 'section.post-body-content p',
    authorSelector: 'span.byline-author-name',
    dateSelector: 'span.is-hidden.news-post-source', // أو أي وسم تاريخ آخر
    articleLinkSelector: 'a.byline-link',
    removeSelector: [
        '.in-post-sticky',
        '.ad-callout-wrapper',
        '.insider-raw-embed',
        'div[data-bi-ad]'
    ]
};