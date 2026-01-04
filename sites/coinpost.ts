export default {
    url: 'https://coinpost.jp/',
    match: /coinpost\.jp\/\?p=\d+/,
    language: "ja-JP",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".entry-title a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.entry-title",

    // محدد اسم الكاتب
    authorSelector: ".post-auther a",

    // محدد التاريخ
    dateSelector: "time.entry-date",

    // محدد المحتوى الرئيسي
    contentSelector: "#the-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.nrbhead',             // ترويسة "الأكثر قراءة"
        '#nrb-slide-wrap',      // سلايدر المقالات المقترحة
        '.widgets',             // ويدجت إعلانية وتفاعلية
        '.shutterstock2',       // حقوق الصور
        '.twitter-tweet',       // تضمينات تويتر (إذا كنت تريد النص فقط)
        '.googlead',            // إعلانات جوجل
        '#div-gpt-ad',          // مساحات إعلانية GPT
        '.kjstsns',             // أزرار التواصل الاجتماعي
        '.dlbox_wrap',          // صندوق تحميل التطبيق
        '.kiji_h3_before',      // فاصل إعلاني قبل العناوين الفرعية
        'script',               // أي سكربتات متبقية
        'iframe'                // أي إطارات مضمنة
    ]
};