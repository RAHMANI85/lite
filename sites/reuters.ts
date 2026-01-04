export default {
    url: 'https://www.reuters.com/',
    match: /reuters\.com\/(markets|business|world)\/.+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: "a[class*='title-module__link']",

    // محدد العنوان الرئيسي (داخل صفحة المقال)
    titleSelector: "h1.article-header__title__3Y29f",

    // محدد اسم الكاتب
    authorSelector: "a[data-testid='AuthorRedirect']",

    // محدد التاريخ (تاريخ النشر)
    dateSelector: "time[datetime]",

    // محدد المحتوى الرئيسي للمقال
    contentSelector: "div.article-body__content__17Yit",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '[data-testid="Sidebar"]',           // القائمة الجانبية
        '[data-testid="AuthorSocialLinks"]', // روابط التواصل الاجتماعي للكاتب
        '.at-recirculation-item',           // مقالات مقترحة "اقرأ أيضاً"
        '.spacer-module__container__66Y52',  // مسافات فارغة تقنية
        'div[data-testid="QuoteBox"]',       // صناديق الاقتباسات الترويجية
        'nav',                               // التنقل الداخلي
        'script',                            // ملفات السكريبت
        'style'                              // التنسيقات المضمنة
    ]
};