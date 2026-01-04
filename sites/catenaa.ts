export default {
  // معلومات أساسية
  url: 'https://catenaa.com/news/',
  match: /catenaa\.com\/news/,
  language: "en-US",

  // 1. محددات قائمة المقالات (List Selectors)
  articleContainerSelector: '.news-card',
  articleLinkSelector: '.news-card__content a[href]',

  // 2. محددات صفحة التفاصيل (Article Detail Selectors)

  // العنوان (محدث بناءً على h1.heading-1)
  titleSelector: 'h1.heading-1',

  // التاريخ: تم التحديث بناءً على المقتطف الأخير <li><span>...</span></li>
  dateSelector: 'li span',

  // 3. محددات الترحيل
  nextPageSelector: null,

  // 4. محددات المحتوى والكاتب

  // المحتوى: الحاوية الرئيسية لنص المقال
  contentSelector: 'div.entry-content',

  // الكاتب: العنصر الذي يحتوي على اسم الكاتب
  authorSelector: 'p.author-name',

  // 5. محددات التنظيف
  removeSelector: [
    'script',
    'style'
  ]
};