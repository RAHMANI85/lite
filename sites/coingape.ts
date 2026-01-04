export default {
    // 1. URL و Match
    url: 'https://coingape.com/category/news/',
    match: /coingape\./,
    language: "en-US",

    // 2. محددات القائمة (في صفحة التصنيف)
    // تم تحسينها لتشمل العناوين الرئيسية والجانبية
    articleLinkSelector: '.post-content h2 a, .post-content h3 a, .entry-title a',

    // 3. محددات صفحة المقال (التفاصيل)

    // العنوان: دقيق جداً بناءً على الكود الذي أرسلته
    titleSelector: 'h1.c-title.entry-title',

    // التاريخ: الكلاس publishby يحتوي على نص مثل "1 day ago"
    dateSelector: '.publishby',

    // الكاتب: الرابط المباشر لاسم الكاتب
    authorSelector: '.auth-name a',

    // المحتوى: تم دمج الكلاسات لضمان سحب الفقرات والعناوين الجانبية
    contentSelector: [
        '.main.c-content p',
        '.main.c-content h2',
        '.entry-content p'
    ],

    // 4. التنظيف (إزالة الإعلانات والعناصر غير الضرورية)
    // تم تحديث القائمة لإزالة صناديق "Author Bio" والإعلانات الجديدة في الكود
    removeSelector: [
        '.ads-container',
        '.ads-placeholder',
        '.author-card-handler', // إزالة بطاقة الكاتب داخل المحتوى
        '.author-card1',
        '.socialnewauthobox',
        '.twitter-tweet',
        '.newsletter-subscription-form',
        'script',
        'style',
        'iframe',
        'button.overlaybutton'
    ]
};