export default {

    url: 'https://www.coinspeaker.com/',
    match: /coinspeaker\.com\/.+/,
    language: "en-US",


    articleLinkSelector: ".news-preview_title a",


    titleSelector: "h1.title-main",


    authorSelector: ".cperson__fn a",


    dateSelector: 'time',

    contentSelector: '.content',

    removeSelector: [
        '.ckeynotes__title',
        '.ckeynotes',
        '.coinlive',
        '.c-auto-related',
        '.disclaimer',
        '.content-person',
        '.content_share-mobile',
        '.meta-tags',
        'script',
        'style',
        'ins.adsbygoogle',
        '.infinscroll_next_page_link'
    ]
};