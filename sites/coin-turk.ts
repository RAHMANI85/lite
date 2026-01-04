export default {
    url: 'https://coin-turk.com/',
    match: /coin-turk\.com\/.+/,
    language: "tr-TR",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".p-url",

    // محدد العنوان الرئيسي
    titleSelector: "h1.s-title",

    // محدد اسم الكاتب
    authorSelector: ".meta-author a",

    // محدد التاريخ
    dateSelector: "time.updated-date",

    // محدد المحتوى الرئيسي
    contentSelector: ".entry-content, .single-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.breadcrumb-wrap',      // مسار التنقل
        '.ozet',                 // صندوق الملخص (إذا كنت تريد المقال كاملاً فقط)
        '.ct-gnews-meta',        // بنر متابعة جوجل نيوز
        '.smeta-extra',          // أزرar المشاركة والتفاعل
        '.p-categories',         // التصنيفات أعلى العنوان
        'hr',                    // الخطوط الفاصلة
        '.rbi',                  // أيقونات الخطوط
        'script',                // السكربتات
        'ins'                    // الإعلانات المضمنة
    ]
};