export default {
    // الرابط الأساسي
    url: 'https://www.forbes.com/',

    // نمط التحقق من الروابط
    match: /forbes\.com\/sites\/.+/,

    // استخراج العنوان (Forbes يستخدم فئة speakable-headline)
    titleSelector: 'h1.speakable-headline',

    // استخراج محتوى المقال (في فوربس عادة ما يكون داخل body-container)
    contentSelector: 'div.article-body-container p',

    // استخراج اسم الكاتب من الكود الذي أرسلته
    authorSelector: 'a._4tin10wS',

    // تاريخ النشر (فوربس تستخدم عادة tag وقت محدد)
    dateSelector: 'time',

    // الروابط في صفحة القوائم
    articleLinkSelector: 'a[href*="/sites/"]',

    // تنظيف العناصر غير الضرورية
    removeSelector: [
        'button[data-testid*="follow-button"]', // زر المتابعة
        '.T65Fn', // المسافات الفارغة أو الزخرفية
        'aside',  // الإعلانات الجانبية
        '.article-sharing', // أزرار المشاركة
        'ufc-follow-author-widget'
    ]
};