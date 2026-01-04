export default {

    url: 'https://blockchain.news/',
    match: /blockchain\.news\/news\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".post-title a",

    // محدد العنوان الرئيسي للمقال
    titleSelector: "figure.figure h1",

    // محدد اسم الكاتب
    authorSelector: "figure.figure a[href^='/Profile/']",

    // محدد التاريخ
    dateSelector: '.publication-date',

    // محدد المحتوى الرئيسي للمقال
    contentSelector: 'div.col-lg-8',

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.lead',                     // ملخص المقال (إذا أردت حذفه من متن النص لتجنب التكرار)
        'figure.figure img',         // الصورة الرئيسية (إذا كنت لا تريدها داخل النص)
        '.social-share',             // أزرار المشاركة
        '.related-news',             // أخبار ذات صلة
        'script',                    // السكريبتات
        'style',                     // الستايلات
        '.ad-container',             // حاويات الإعلانات
        '.subscription-box'          // صناديق الاشتراك
    ]
};