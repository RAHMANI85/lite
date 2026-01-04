export default {
    url: 'https://arab-btc.net/category/%d8%a7%d9%84%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1/%d8%a7%d8%ae%d8%a8%d8%a7%d8%b1-%d8%a7%d9%84%d8%b9%d9%85%d9%84%d8%a7%d8%aa-%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a%d8%a9/',
    match: /arab-btc\./,
    language: "ar-AR",

    articleSelector: 'li.post-item',
    articleLinkSelector: 'h3.post-title a',

    // 💡 تحديث محدد الصفحة التالية ليكون أكثر دقة لقالب TieLabs
    nextPageSelector: 'a.next.page-numbers, .pagination a:contains("Next")',

    // محددات صفحة التفاصيل (ستعمل عند دخول الأداة للمقال)
    titleSelector: 'h1.post-title.entry-title',
    contentSelector: 'div.entry-content.entry',

    // التاريخ والمؤلف يعملان بنجاح
    dateSelector: 'span.date span:last-child',
    authorSelector: 'span.meta-author a.author-name',

    removeSelector: [
        'figure.wp-block-embed',
        'div.embed-twitter',
        'script',
        '.sharedaddy',
        '.post-bottom-meta',
        '#comments',     // إضافة لحذف التعليقات
        '.related-posts' // إضافة لحذف المقالات ذات الصلة
    ]
};