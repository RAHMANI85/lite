export default {
    // الرابط الأساسي
    url: 'https://www.barrons.com/',

    // نمط التحقق من الروابط
    match: /barrons\.com\/articles\/.+/,

    // استهداف العنوان من الكود الذي أرسلته
    titleSelector: 'h1.nk-headline-heading',

    // استهداف محتوى المقال
    // ملاحظة: المقال محمي بـ Paywall، لذا سنستهدف الفقرات المتاحة
    contentSelector: 'section[data-id="standard_index_ArticleHeadWrapper"] p',

    // تاريخ النشر
    dateSelector: 'p[data-testid="timestamp-text"]',

    // الروابط في صفحات القوائم
    articleLinkSelector: 'a[href*="/articles/"]',

    // تنظيف العناصر غير الضرورية (أزرار المشاركة، الإعلانات، جدار الحماية)
    removeSelector: [
        'div[data-id="utilitybar"]',      // أزرار المشاركة والطباعة
        '.ad-container',                  // الإعلانات
        '#cx-interstitial-snippet-container', // حاوية الـ Paywall
        'ufc-follow-author-widget',       // زر متابعة الكاتب
        'figure'                          // الصور إذا كنت لا تريدها
    ]
};