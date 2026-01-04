export default {
    url: 'https://www.economist.com/',
    match: /economist\.com\/.+\/\d{4}\/\d{2}\/\d{2}\/.+/,
    language: "en-US",

    // محدد العنوان الرئيسي
    titleSelector: "h1[class*='e1qjd5lc0'], h1.article__headline",

    // محدد العنوان الفرعي
    subtitleSelector: "h2[class*='e6h2z500'], h2.article__description",

    // محدد التاريخ
    dateSelector: "time[datetime]",

    // محدد المحتوى (يستهدف الفقرات النصية فقط)
    contentSelector: "p[data-component='paragraph']",

    // محدد مؤلف المقال (إذا وجد في بنية أخرى للموقع)
    authorSelector: "span[class*='article__author-name']",

    // تنظيف المقال من العناصر المزعجة
    removeSelector: [
        '#tp-regwall',            // إزالة حاوية الحجب
        '.adComponent_advert',    // الإعلانات الجانبية وفي النص
        'figure.css-3mn275',      // الرسوم التوضيحية (اختياري)
        'nav[aria-labelledby]',   // الروابط السفلية (Explore more)
        '._newsletterContentPromo', // ترويج النشرة البريدية
        'button[data-testid]'     // أزرار المشاركة
    ]
};