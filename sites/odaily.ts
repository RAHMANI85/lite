export default {
    url: 'https://www.odaily.news/en/newsflash/',
    match: /odaily\.news\/en\/newsflash\/\d+/,
    language: "en-US",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".w-full a[href*='/en/newsflash/']",

    // محدد العنوان الرئيسي
    titleSelector: "h1.title",

    // محدد اسم الكاتب (غالباً ما يكون Odaily في قسم Newsflash)
    authorSelector: ".DetailContent_detail__pRaS_ p", // يتم استخراجه عادة من سياق النص الأول

    // محدد التاريخ
    dateSelector: ".text-custom-55942D.text-12",

    // محدد المحتوى الرئيسي
    contentSelector: "#newsflash-content",

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.dot',                  // النقطة الخضراء بجانب العنوان
        '.mt-[36px]',            // قسم "Source Link" (رابط المصدر)
        '.px-[15px]',            // قسم "Recommended Articles" (المقالات المقترحة)
        '.fixed',                // شريط التفاعل العائم (لايك، مشاركة)
        'img',                   // الأيقونات والصور غير الضرورية في الأخبار العاجلة
        'svg'                    // الأيقونات البرمجية
    ]
};