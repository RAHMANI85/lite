export default {

    url: 'https://coinchapter.com/',
    match: /coinchapter\.com\/.+/,
    language: "en-US",

    // محدد رابط المقال في صفحات الأقسام
    articleLinkSelector: ".post-title a",

    // محدد العنوان الرئيسي للمقال
    titleSelector: "h1.s-title",

    // محدد اسم الكاتب
    authorSelector: ".meta-author a",

    // محدد التاريخ (يستخدم كلاس updated-date أو الوسم time)
    dateSelector: 'time.updated-date',

    // محدد المحتوى الرئيسي للمقال
    contentSelector: '.entry-content',

    // العناصر المراد حذفها لتنظيف المحتوى من الإعلانات والأدوات الجانبية
    removeSelector: [
        '.ruby-table-contents',      // جدول المحتويات الداخلي
        '.inline-single-ad',         // الإعلانات المدمجة داخل النص
        '.ad-wrap',                  // تغليف الإعلانات
        '.t-shared-sec',             // أزرار المشاركة
        '.wpulike',                  // زر الإعجاب (Like Button)
        '.breadcrumb-wrap',          // مسار التنقل (Breadcrumbs)
        'style',                     // أكواد الستايل المدمجة
        'script',                    // ملفات السكريبت
        '.ad-description',           // نص كلمة "Advertisement"
        'ins.adsbygoogle',           // إعلانات جوجل
        '.p-url'                     // الروابط الدعائية لمقالات أخرى "You May Also Like"
    ]
};