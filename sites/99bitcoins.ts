export default {
    url: "https://99bitcoins.com/news/",
    match: /99bitcoins\.com/i,
    language: "en-US",

    // محددات صفحة القائمة
    articleSelector: undefined, // يمكن إبقاؤه undefined إذا كان articleLinkSelector يعمل جيدًا وحده
    articleLinkSelector: 'a.nnbtc-card[href]',
    nextPageSelector: '.next',

    // محددات صفحة المقال الداخلية
    titleSelector: 'h1.nnbtc-header__title',
    contentSelector: '.nnbtc-article__content-main',
    dateSelector: '.nnbtc-article-top__author-info-text',
    authorSelector: '.nnbtc-article-top__author-info--name a.author-info--name',

    // محددات التنظيف
    removeSelector: [
        '.nnbtc-social-share',
        '.nnbtc-disclaimer',
        '.nnbtc-toc--mobile',
        '.chart.crypto-chart-instance',
        '.trust-us',
        '.nnbtc-post-tags',
        '.nnbtc-google-news',
        '.profile-frontend',
        'figure.wp-caption-text',
        'p:has(b:contains("DISCOVER"))'
    ]
};