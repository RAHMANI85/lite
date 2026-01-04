export default {
    url: 'https://jp.cointelegraph.com/tags/cryptocurrencies',
    // يستهدف جميع صفحات coinelegraph.com
    match: /cointelegraph\.com/,
    // بناءً على المحتوى الإنجليزي في المقتطف
    language: "en-US",

    // العنصر الأب المتكرر لكل مقال
    articleSelector: 'article.post-card-inline',

    // رابط المقال (الرابط الذي يحيط بالعنوان)
    articleLinkSelector: 'a.post-card-inline__title-link',

    // العنوان موجود داخل وسم <span> في رابط العنوان
    titleSelector: 'span.post-card-inline__title',

    // المقتطف/الملخص موجود في الفقرة ذات الفئة post-card-inline__text
    contentSelector: 'p.post-card-inline__text',

    // التاريخ موجود داخل وسم <time>
    dateSelector: 'time.post-card-inline__date',

    // المؤلف موجود داخل وسم <span>، الذي هو داخل وسم <a>، ضمن .post-card-inline__author
    authorSelector: '.post-card-inline__author a span',

    // لا يوجد محدد واضح لزر "Load More" في المقتطف
    nextPageSelector: undefined,

    removeSelector: []
};