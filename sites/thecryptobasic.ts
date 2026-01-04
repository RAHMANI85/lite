export default {
    url: 'https://thecryptobasic.com/2025/',
    match: /thecryptobasic\.com\/\d{4}\//,
    language: "en-US",

    // اختيار روابط المقالات في القوائم (بناءً على بنية الموقع العامة)
    articleLinkSelector: '.td-module-title a',

    // المتغيرات الخاصة بصفحة المقال
    titleSelector: 'h1.tdb-title-text',
    authorSelector: '.tdb-author-name',
    dateSelector: 'time.entry-date',

    // محتوى المقال الرئيسي
    contentSelector: '.tdb-block-inner.td-fix-index',

    // العناصر المراد حذفها (إعلانات، تنسيقات CSS، نصوص توضيحية)
    removeSelector: [
        '.td-adspot-title',
        '.td-a-ad',
        'style',
        'script',
        'iframe',
        '.wp-caption-text',
        '.tdb-title-line',
        '#FreeStarVideoAdContainer',
        '.td-post-featured-image'
    ]
};