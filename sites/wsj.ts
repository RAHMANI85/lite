export default {
    url: 'https://www.wsj.com/',
    match: /wsj\.com\/articles\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: "a[href*='/articles/']",

    // محدد العنوان الرئيسي
    titleSelector: "h1[class*='StyledHeadline']",

    // محدد العنوان الفرعي (Subheadline/Dek)
    subtitleSelector: "h2[class*='NormalDek']",

    // محدد اسم الكاتب
    authorSelector: "a[class*='AuthorLink']",

    // محدد التاريخ
    dateSelector: "time[datetime]",

    // محدد المحتوى الرئيسي للمقال
    contentSelector: "section[class*='Container']",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.article-body-tools',           // شريط أدوات المشاركة والطباعة
        '[data-testid="utility-bar"]',   // شريط الأدوات الإضافي
        '.audioplayer',                  // مشغل الصوت (Listen)
        'button',                        // جميع الأزرار (Resize, Share, etc.)
        '.tp-container-inner',           // حاوية عرض الاشتراك (Paywall/Piano)
        '#cx-pro-snippet-overlay',       // تراكيب الاشتراك (Overlays)
        '.css-16aepit',                  // نص حقوق النشر (Copyright)
        'nav.breadcrumb',                // روابط التنقل العلوية
        '.article-comments',             // قسم التعليقات
        'div[aria-label="What to Read Next"]', // قسم "ماذا تقرأ بعد ذلك"
        'script',
        'style'
    ]
};