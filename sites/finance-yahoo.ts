export default {
    // الرابط الأساسي
    url: 'https://finance.yahoo.com/',

    // نمط التحقق من الروابط (ليشمل المقالات)
    match: /finance\.yahoo\.com\/news\/.+/,

    // العنوان
    titleSelector: 'h1.cover-title',

    // محتوى المقال
    // تم استخدام 'div.body p' بناءً على الكلاسات yf-7hmkaz الموجودة في الكود
    contentSelector: 'div.body p.yf-7hmkaz',

    // الكاتب
    authorSelector: 'div.byline-attr-author',

    // التاريخ
    dateSelector: 'time.byline-attr-meta-time',

    // الروابط في صفحة القوائم
    articleLinkSelector: 'a[href*="/news/"]',

    // تنظيف العناصر المزعجة (الإعلانات، الـ Tickers، أزرار المشاركة)
    removeSelector: [
        '.ticker-header',      // قسم "In this article"
        '.ticker-list',        // قائمة العملات والأسهم
        '.byline-share',       // أزرار المشاركة
        '.wrapper[data-testid="inarticle-ad"]', // الإعلانات داخل المقال
        '.privacy-container',  // روابط الخصوصية في الأسفل
        'figure'               // الصور
    ]
};