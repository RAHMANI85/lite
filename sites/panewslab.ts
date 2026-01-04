export default {
    url: 'https://www.panewslab.com/zh/articles',
    match: /panewslab\.com\/zh\/articles\/\d+/, // تطابق روابط المقالات الصينية
    language: "zh-CN",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: "h3 a",

    // محدد العنوان الرئيسي
    titleSelector: "h3.text-neutrals-80",

    // محدد اسم الكاتب (العمود)
    authorSelector: ".text-neutrals-60 a",

    // محدد التاريخ
    dateSelector: ".text-neutrals-60 span",

    // محدد المحتوى الرئيسي
    contentSelector: "article.prose",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        'button',                // أزرار التفاعل (إعجاب، مشاركة)
        '.iconify',              // الأيقونات البرمجية
        '#reka-popover-trigger', // منبثقات التفاعل
        '[role="separator"]',    // الفواصل البصرية بين الكاتب والتاريخ
        '.flex-initial',         // أدوات التحكم الإضافية
        'svg',                   // أي رسوم متجهة داخل النص
        '.shrink-0',             // عناصر الصور الرمزية الجانبية
        'script',                // السكربتات
        '.grid'                  // في حال وجود شبكة إعلانات أو روابط مقترحة أسفل العنوان
    ]
};