export default {
    // 1. الإعدادات الأساسية
    url: 'https://bitcoinist.com/news/',
    match: /bitcoinist\.com\/.+/,
    language: "en-US",

    // 2. محدد الروابط في صفحة القسم (News)
    // يستهدف العناوين والصور في القائمة الرئيسية
    articleLinkSelector: '.jeg_posts article h3 a',

    // 3. محددات صفحة المقال الفردي
    titleSelector: 'h1.jeg_post_title',

    authorSelector: '.jeg_meta_container div',

    // التاريخ: استهداف وسم time أو الرابط الذي يحتوي على التاريخ
    dateSelector: ' .jeg_meta_date a',

    // المحتوى: استهداف الحاوية الرئيسية للمقال
    contentSelector: '.content-inner',

    // 4. التنظيف (إزالة الإعلانات والعناصر غير المرغوبة)
    removeSelector: [
        '.trusted-editorial-content', // إزالة صندوق "Trusted Editorial"
        '.related-reading-shortcode',  // إزالة روابط "Related Reading" وسط المقال
        '.jeg_ad',                     // إزالة جميع حاويات الإعلانات
        '.ads-wrapper',                // إزالة أغلفة الإعلانات
        '.ads_code',                   // إزالة كود الإعلانات المباشر
        '.svecc-text-banner',          // إزالة بنرات النصوص (مثل إعلان BitStarz الذي ظهر في الكود)
        '.disclaimer-shortcode',       // إزالة إخلاء المسؤولية في النهاية
        '.jeg_post_tags',              // إزالة التاجات
        'script',
        'style',
        'ins.adsbygoogle'
    ]
};