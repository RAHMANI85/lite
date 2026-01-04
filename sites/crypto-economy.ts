export default {
    // الرابط الأساسي للموقع
    url: 'https://crypto-economy.com/news/',

    // نمط الروابط التي تطابق المقالات
    match: /crypto-economy\.com\/.+/,

    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".elementor-widget-theme-post-title a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.elementor-heading-title",

    // محدد اسم الكاتب
    authorSelector: ".elementor-post-info__item--type-author",

    // محدد التاريخ
    dateSelector: ".elementor-post-info__item--type-custom",

    // محدد المحتوى الرئيسي للمقال
    contentSelector: ".elementor-widget-theme-post-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.elementor-toc',           // جدول المحتويات
        '.elementor-share-buttons',  // أزرار المشاركة
        '.twitter-tweet',           // تغريدات تويتر المضمنة (اختياري)
        '.rank-math-breadcrumb',     // مسار التنقل
        'hr',                       // الخطوط الفاصلة
        'script',                   // السكريبتات
        'style',                    // الستايلات
        '.disclaimer',              // إخلاء المسؤولية (إذا كان له كلاس محدد)
        'noscript'                  // عناصر noscript
    ]
};