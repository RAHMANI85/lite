export default {
    url: 'https://www.cnbc.com/',
    match: /cnbc\.com\/\d{4}\/\d{2}\/\d{2}\/.+/,
    language: "en-US",

    // --- المحددات المضافة والمحدثة ---

    // استهداف روابط المقالات في صفحات التصنيفات والقوائم
    articleLinkSelector: "a.Card-title",

    // محدد العنوان الرئيسي داخل المقال
    titleSelector: "h1.ArticleHeader-headline",

    // محدد النقاط الرئيسية (الملخص)
    keyPointsSelector: ".RenderKeyPoints-list ul li",

    // محدد المحتوى النصي الكامل
    contentSelector: ".ArticleBody-articleBody",

    // التاريخ والوقت
    dateSelector: "time[data-testid='published-timestamp']",

    // --- أدوات التنظيف ---
    removeSelector: [
        '.TopBanner-container',
        '.ArticleGate-proGate',
        '.SocialShare-socialShare',
        'iframe',
        '.BoxRail-container'
    ]
};