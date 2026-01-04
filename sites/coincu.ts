export default {
  // معلومات أساسية
  url: 'https://coincu.com/news/',
  match: /coincu\.com/,
  language: "en-US",

  // 1. محددات قائمة المقالات (List Selectors)
  articleContainerSelector: '.col-inner',
  articleLinkSelector: 'a[href*="/news/"]',

  // 2. محددات صفحة التفاصيل (Article Detail Selectors)
  // الالتزام بأسماء المتغيرات المطلوبة وتحديث قيمها بناءً على الكود المرسل

  // العنوان
  titleSelector: 'h1.post-title',

  // التاريخ: استهداف الكلاس post-date الذي يأتي مباشرة بعد p.writer
  // تم استخدام المحدد المجاور لضمان جلب التاريخ النصي الكامل
  dateSelector: '.authorpostnew .post-date',

  // 3. محددات الترحيل
  nextPageSelector: 'a.next.page-numbers',

  // 4. محددات المحتوى والكاتب

  // المحتوى
  contentSelector: '.entry-content',

  // الكاتب: استهداف الرابط داخل الفقرة التي تحمل كلاس writer
  authorSelector: 'p.writer a',

  // 5. محددات التنظيف
  removeSelector: [
    '.listtags__social',
    '.post-category',
    'script',
    'style'
  ]
};