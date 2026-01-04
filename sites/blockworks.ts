export default {

    url: 'https://blockworks.co/news',
    match: /blockworks\.co\/news\//,
    language: "en-US",


    articleLinkSelector: 'a[href^="/news/"]',

    titleSelector: 'h1',


    authorSelector: 'a[href^="/author/"]',
    dateSelector: 'time[datetime]',

    contentSelector: 'article section > div.prose',


    removeSelector: [
        '.not-prose',
        '.article-ad',
        'hr',
        'script',
        'style'
    ]
};