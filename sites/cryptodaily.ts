export default {

    url: 'https://cryptodaily.co.uk/',
    match: /cryptodaily\.co\.uk\/.+/,
    language: "en-GB",

    // محدد رابط المقال (في صفحات القوائم)
    articleLinkSelector: ".article__title a",

    // محدد العنوان الرئيسي للمقال
    titleSelector: "section.postheading h1",

    // محدد اسم الكاتب
    authorSelector: ".postheading__author-name",

    // محدد التاريخ
    dateSelector: '.postheading__author-bottom b:last-child',

    // محدد المحتوى الرئيسي للمقال
    contentSelector: '.singlepost__content .text-content',

    // العناصر المراد حذفها لتنظيف المحتوى
    removeSelector: [
        '.postheading__socials',      // أزرار المشاركة العلوية
        '.singlepost-buttons',       // أزرار (Disclaimer, Converter...)
        '.singlepost__tags',          // الوسوم (Tags) في نهاية المقال
        '.postheading__tag',          // وسم التصنيف العلوي
        'style',                      // الستايلات
        'script',                     // السكريبتات
        'blockquote + p + .ql-align-justify:last-of-type', // استبعاد معلومات التواصل في البيانات الصحفية
        'h5',                         // عناوين "Contact" في البيانات الصحفية
        'h5 + span'                   // تفاصيل جهة الاتصال
    ]
};