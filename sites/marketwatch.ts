export default {
    // الرابط الأساسي للموقع (هذا ما يبحث عنه المحرك)
    url: 'https://www.marketwatch.com/',

    // النمط الذي يحدد الصفحات التي سيتم كشطها
    match: /marketwatch\.com\/(story|articles|data-news)\/.+/,

    // محددات العناصر
    titleSelector: "h1.article__headline",

    // استهداف الفقرات في الجسم الرئيسي وفي منطقة الـ paywall
    contentSelector: "section.article__body p",

    dateSelector: "time",

    // محدد الروابط في صفحة القوائم (Discovery)
    articleLinkSelector: "a.link",

    // أدوات التنظيف لضمان نص نقي
    removeSelector: [
        '#connatix',
        'ufc-follow-author-widget',
        '.article__byline',
        'iframe',
        '.ad-container'
    ]
};