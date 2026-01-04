export default {
    url: 'https://kriptokoin.com/',
    match: /kriptokoin\.com\/.+/,
    language: "tr-TR",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".entry-title a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.kanews-article-title",

    // محدد اسم الكاتب
    authorSelector: ".kanews-post-author-name a",

    // محدد التاريخ (تاريخ النشر الأول)
    dateSelector: ".posted-on time.published",

    // محدد المحتوى الرئيسي
    contentSelector: ".entry-content-inner",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.kanews-breadcrumb',      // مسار التنقل العلوي
        '.kanews-banner',          // جميع الإعلانات (Banners)
        '.kanews-article-action',  // أزرار المشاركة وتغيير حجم الخط
        '.kanews-article-thumbnail-caption', // تسمية الصورة التوضيحية
        '.sevioads',               // حاويات إعلانية خاصة
        '#respond',                // قسم التعليقات
        '.kanews-reading-bar',     // شريط القراءة العائم
        '.kanews-entry-tags',      // الوسوم (Tags) في نهاية المقال
        'svg',                     // الأيقونات البرمجية
        'noscript'                 // نصوص بديلة للصور
    ]
};