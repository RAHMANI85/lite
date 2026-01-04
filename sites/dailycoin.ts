export default {
    url: 'https://dailycoin.com/',
    match: /dailycoin\.com\//,
    language: "en-US",

    articleLinkSelector: 'a.mkd-pt-title-link',

    titleSelector: 'h1.mkd-post-title',
    authorSelector: 'a[rel="author"].fn',
    dateSelector: 'time[datetime]',

    contentSelector: '.mkd-post-text-inner',

    removeSelector: [
        '.mkd-related-posts-holder',
        '.code-block',
        '.sevioads',
        '.social-share-icons',
        '.user-sentiment-vote',
        '.vote-results',
        'script',
        'style',
        'footer',
        'noscript'
    ]
};