export default {
  // معلومات أساسية
  url: 'https://www.coindesk.com/latest-crypto-news',
  match: /coindesk\.com/,
  language: "en-US",

  // 1. محددات قائمة المقالات (List Selectors)
  // الحاوية التي تضم المقالات في القائمة
  articleContainerSelector: '.article-card',
  articleLinkSelector: 'a.content-card-title, a[href*="/policy/"], a[href*="/business/"], a[href*="/markets/"]',

  // 2. محددات صفحة التفاصيل (Article Detail Selectors)

  // العنوان: يظهر في h1 بكلاس محدد في الكود المرسل
  titleSelector: 'h1.font-headline-lg',

  // التاريخ: يظهر في span يحتوي على نص Published أو Updated
  dateSelector: 'div.flex.flex-col span:contains("Published"), div.flex.flex-col span',

  // الكاتب: الرابط الذي يحتوي على مسار /author/
  authorSelector: 'a[href^="/author/"]',

  // المحتوى: الحاوية الرئيسية لنص المقال (document-body)
  contentSelector: 'div.document-body',

  // 3. الترحيل
  nextPageSelector: 'button.load-more',

  // 4. التنظيف لإزالة الفيديوهات والعناصر غير النصية
  removeSelector: [
    '.container-jwp',        // إزالة مشغل الفيديو
    'script',
    'style',
    '.jwplayer',             // إزالة مشغل الفيديو JW
    'svg',
    'button'
  ]
};