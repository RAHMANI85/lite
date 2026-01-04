export default {

    url: 'https://www.cointribune.com/',
    match: /cointribune\.com\/.+/,
    language: "fr-FR",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".post-title a",

    // محدد العنوان الرئيسي للمقال
    titleSelector: "h1.single--title",

    // محدد اسم الكاتب
    authorSelector: ".wrote_by",

    // محدد التاريخ
    dateSelector: ".published_at",

    // محدد المحتوى الرئيسي للمقال
    contentSelector: ".wp-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.esb-wrapper',              // صندوق أزرار الذكاء الاصطناعي (ChatGPT, Perplexity...)
        '.social--gnews--container', // رابط Google News
        '.in-brief',                 // قسم "En bref" (الملخص)
        '.ads',                      // الإعلانات داخل النص
        'gecko-coin-price-chart-widget', // ويدجت أسعار العملات
        '.affiliate-button',         // أزرار الروابط التسويقية (Affiliate)
        '.block-text-end-article',   // قسم "Maximisez votre expérience" في النهاية
        '.read-to-earn',             // برنامج Read to Earn
        '#section-actions',          // أزرار التحكم بالخط والمشاركة في الأسفل
        '.post-conclusion'           // الفقرة الختامية (اختياري، إذا كنت تريد نص الخبر فقط)
    ]
};