export default {
  // معلومات أساسية
  url: 'https://www.binance.com/en/square/news/all',
  match: /binance\.com\/en\/square\/news/,
  language: "en-US",

  // 1. محددات قائمة المقالات (List Selectors)
  articleContainerSelector: 'div.css-vurnku',
  articleLinkSelector: 'a[href*="/en/square/post/"]',

  // العنوان في القائمة (بناءً على التسمية المطلوبة)
  titleSelector: 'h1.inline.break-words',

  // الوقت/التاريخ: تم التعديل ليناسب الكلاس الموجود في الكود (create-time)
  dateSelector: 'span.create-time',

  // ملخص المقال
  summarySelector: 'div.css-s5uq71',

  // 2. محددات الترحيل
  nextPageSelector: null,

  // 3. محددات صفحة التفاصيل (Article Detail Selectors)
  // تم التعديل ليطابق ID المحتوى الرئيسي في HTML
  contentSelector: '#articleBody',

  // اسم الكاتب
  authorSelector: 'a.nick',

  // 4. محددات التنظيف
  removeSelector: [
    'section.css-1b86m5n', // يزيل AI Summary
    '.feed-statements',    // يزيل Disclaimer
    '.feed-follow-button', // يزيل زر المتابعة
    'svg'                  // يزيل الأيقونات
  ]
};