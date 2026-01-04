export default {
    url: 'https://www.btc-echo.de/',
    match: /btc-echo\.de\/(artikel|news|kategorie)\/.+/,
    language: "de-DE",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: " .entry-title a",

    // محدد العنوان الرئيسي
    titleSelector: "h1.entry-title",

    // محدد اسم الكاتب
    authorSelector: "a[href*='/news/author/']",

    // محدد التاريخ (يستهدف وسم time الأول الذي يحتوي على الساعة)
    dateSelector: "time[datetime]",

    // محدد المحتوى الرئيسي (عادة ما يكون داخل وسم article أو div محدد في هذا الموقع)
    contentSelector: ".bt-article-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.btce30tw-breadcrumbs', // مسار التنقل (Breadcrumbs)
        'svg',                    // الأيقونات والرسوم المتجهة (مثل لوغو BTC في العنوان)
        '.bt-not-prose',          // العناصر التنسيقية غير النصية
        'picture',                // صور الكتاب الجانبية أو أي صور غير متعلقة بالخبر
        'noscript',               // نصوص بديلة للسكربتات
        '.bt-mt-4 div',           // أقسام التفاعل أو المعلومات الإضافية أسفل الكاتب
        'aside',                  // الأشرطة الجانبية
        '.adsbygoogle',           // الإعلانات
        'footer'                  // التذييل
    ]
};