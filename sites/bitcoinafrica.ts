export default {
    url: 'https://bitcoinafrica.io/',
    match: /bitcoinafrica\.io\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".mvp-feat1-list-cont a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.mvp-post-title",

    // محدد اسم الكاتب
    authorSelector: ".author-name a",

    // محدد التاريخ (تاريخ النشر)
    dateSelector: "time.post-date",

    // محدد المحتوى الرئيسي
    contentSelector: "#mvp-content-main",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.mvp-post-cat',             // التصنيف العلوي
        '.mvp-author-info-wrap',     // معلومات الكاتب والتاريخ العلوية
        '.mvp-side-wrap',            // القائمة الجانبية (Sidebar)
        '.mvp-post-soc-wrap',        // أزرار المشاركة الاجتماعية
        '.theiaPostSlider_nav',      // أزرار التنقل في السلايدر إذا وجدت
        '#mvp_tabber_widget-3',      // أداة القوائم الجانبية (Latest)
        '.mvp-feat1-list-wrap',      // قوائم المقالات المقترحة
        'iframe',                    // الفيديوهات أو الإطارات الخارجية
        'ins.adsbygoogle',           // إعلانات جوجل
        'script',                    // ملفات السكريبت
        'style'                      // التنسيقات المضمنة
    ]
};