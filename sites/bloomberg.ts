export default {
    url: 'https://www.bloomberg.com/',
    match: /bloomberg\.com\/news\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: "a[class*='ArticleHeadline']",

    // محدد العنوان الرئيسي
    titleSelector: "h1[class*='ArticleHeadline_headline']",

    // محدد اسم الكاتب
    authorSelector: "span[class*='ArticleByline_author']",

    // محدد التاريخ (تاريخ النشر)
    dateSelector: "time[datetime]",

    // محدد المحتوى الرئيسي
    contentSelector: ".body-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.inlineNewsletter_inline-newsletter-top__XZE6x', // صناديق النشرة البريدية العلوية
        '.inlineNewsletter_inline-newsletter-bottom__rvvO6', // صناديق النشرة البريدية السفلية
        '.BasicContent_bookmarkSpeech__spa9p',            // أزرار الحفظ والترجمة
        '.textToSpeech_textToSpeech__iymhM',             // أداة الاستماع الصوتي
        '.media-ui-BaseAd_baseAd-dXBqvbLRJy0-',           // الإعلانات داخل النص
        'figure[data-component="chart"]',                 // الرسوم البيانية (إذا كنت تريد النص فقط)
        'script',                                         // ملفات السكريبت
        'style',                                          // التنسيقات المضمنة
        'button'                                          // أي أزرار تفاعلية داخل المقال
    ]
};