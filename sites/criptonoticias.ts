export default {
    url: 'https://www.criptonoticias.com/mercados/',
    // يستخدم تعبيرًا عاديًا (regex) للبحث عن أي رابط من الموقع.
    match: /criptonoticias\.com/,
    language: "es-ES",

    // العنصر الأب المتكرر لكل مقال (يحتوي على فئة jeg_post).
    articleSelector: 'article.jeg_post',

    // رابط المقال (هو نفسه محدد العنوان، داخل وسم <a> داخل العنوان).
    articleLinkSelector: 'h3.jeg_post_title a',

    // محدد زر "Load More" (غير موجود في المقتطف، لكنه متوقع في هذا النوع من القوالب). 
    // سيتم ترك هذا الخيار فارغًا لافتراض التنقل المعتاد أو عدم وجود زر تحميل إضافي.
    nextPageSelector: undefined,

    // العنوان: نفس محدد الرابط.
    titleSelector: 'h3.jeg_post_title a',

    // المقتطف/الملخص: موجود داخل وسم <p> ضمن حاوية jeg_post_excerpt.
    contentSelector: '.jeg_post_excerpt p',

    // التاريخ: موجود داخل رابط في وسم jeg_meta_date (سيتم استخراج النص).
    dateSelector: '.jeg_meta_date a',

    // المؤلف: موجود داخل وسم <a> ضمن jeg_meta_author.
    authorSelector: '.jeg_meta_author a',

    removeSelector: []
};