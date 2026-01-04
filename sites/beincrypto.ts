export default {
    // رابط القسم الأساسي
    url: 'https://beincrypto.com/category/markets/',
    match: /beincrypto\./,
    language: "en-US",

    // محددات القائمة (List Selectors)
    // نستخدم المحددات العامة التي تجد الروابط في صفحة القائمة
    articleLinkSelector: 'a[href*="/"] h2, .GridCellContent-sc-b822dd94-10 a',
    nextPageSelector: 'button[aria-label="Load more posts"]',

    // =======================================================
    // محددات صفحة المقال الداخلية (Article Detail Selectors)
    // =======================================================

    // 💡 العنوان من داخل المقال (h1)
    titleSelector: 'h1.Title-sc-e9e4289e-7',

    // 💡 المحتوى: يشمل النقاط الرئيسية (Bullet Points) والنص الأساسي
    contentSelector: '.Content-sc-e9e4289e-14, .BulletPoints-sc-7b0fcdf0-0',

    // 💡 التاريخ الكامل (مثال: 17 December 2025) بدلاً من الوقت النسبي
    dateSelector: '.DateWrapper-sc-8ae0d38d-2',

    // 💡 اسم الكاتب (Author)
    authorSelector: 'a.AuthorLink-sc-56c6010c-3',

    // محددات التنظيف لإزالة العناصر المزعجة داخل النص
    removeSelector: [
        '.AuthorContainer-sc-56c6010c-0', // إزالة مربع الكاتب من داخل المحتوى
        'script',
        'noscript',
        'button',
        '.RelatedNews-sc-...' // أي كلاسات لمقالات ذات صلة تظهر داخل النص
    ]
};