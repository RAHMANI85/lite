export default {
    url: 'https://cryptovalleyjournal.com/',
    match: /cryptovalleyjournal\.com\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".post-title a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.post-title",

    // محدد اسم الكاتب
    authorSelector: ".reviewer a",

    // محدد التاريخ (تاريخ النشر)
    dateSelector: "time.value-title",

    // محدد المحتوى الرئيسي
    contentSelector: "#wwdo.post-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.the-post-header',          // رأس المقال (العنوان المتكرر)
        '.featured',                 // الصورة البارزة إذا كنت تريد النص فقط
        '.wwcontent',                // مساحات الإعلانات العلوية
        '.elementor-44238',          // صندوق الاشتراك في النشرة البريدية (Newsletter)
        '.elementor-32026',          // قسم المقالات المقترحة (Related Posts) داخل المحتوى
        'script',                    // ملفات السكريبت
        'style',                     // التنسيقات المضمنة
        'ins',                       // الإعلانات (Revive/Google)
        'input[type="hidden"]'       // الحقول المخفية
    ]
};