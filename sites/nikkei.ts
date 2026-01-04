export default {
    // الرابط الأساسي للموقع
    url: 'https://asia.nikkei.com/',

    // التحقق من أن الرابط يتبع نمط المقالات
    match: /asia\.nikkei\.com\/.+\/.+/,

    // العنوان
    // يستخدم الموقع فئات مثل NewsArticleHeader_newsArticleHeaderTitle
    titleSelector: 'h1.article-header__title',

    // محتوى المقال
    // المحتوى الأساسي موجود داخل وسوم p داخل حاوية النص البرمجي
    contentSelector: '.NewsArticleBody_newsArticleBody__wMhF_ p',

    // الكاتب
    authorSelector: 'div[data-trackable="byline"]',

    // التاريخ
    dateSelector: 'div[data-trackable="timestamp"]',

    // تنظيف العناصر غير الضرورية
    removeSelector: [
        '.InlineAd_inlineAd__9lUP7', // الإعلانات المدمجة
        '.InreadAd_inreadAd__jV4Tl', // إعلانات الفيديو
        '#paywall-offer',             // عروض الاشتراك (Paywall)
        'script',
        'iframe'
    ]
};