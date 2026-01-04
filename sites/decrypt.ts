export default {
    url: 'https://decrypt.co/news',
    match: /decrypt\./,
    language: "en-US",

    // العنصر الأب المتكرر الذي يحتوي على كل خبر (أقرب عنصر <article> يضم كل شيء).
    // يتم افتراض أن الحاوية الرئيسية للمقالات هي "article.max-w-3xl".
    articleSelector: 'article.max-w-3xl > article',

    // رابط المقال: يستهدف الـ <a> الذي يحتوي على الفئة linkbox__overlay، وهو ثابت.
    articleLinkSelector: 'a.linkbox__overlay',

    // محدد زر "Load More" في أسفل الصفحة.
    nextPageSelector: 'button:has(span:contains("Load More"))',

    // العنوان هو نفس محدد الرابط.
    titleSelector: 'a.linkbox__overlay',

    // المقتطف/الملخص: يستهدف عنصر <p> الذي يستخدم الفئة line-clamp-2 (محدّد للقص).
    contentSelector: 'p[class*="line-clamp-2"]',

    // التاريخ: موجود داخل عنصر h4 في بداية كل مقال.
    dateSelector: 'h4',

    // المؤلف: موجود داخل أول <span> في وسم <p> داخل <footer> (سيتم تنظيف النص لإزالة "by").
    authorSelector: 'footer p span:first-of-type',

    removeSelector: []
};