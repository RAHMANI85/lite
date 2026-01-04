export default {
  // 1. URLs
  url: 'https://www.theblock.co/latest-crypto-news',
  match: /theblock\./,
  language: "ar",

  // 2. محددات القائمة (List Selectors - تم تأكيد نجاحها)
  articleContainerSelector: '.articleCard',
  articleLinkSelector: '.articleCard__link',
  titleSelector: '.articleCard__headline span',
  dateSelector: '.meta__wrapper',
  categorySelector: '.meta__category',
  imageSelector: '.articleCard__thumbnail img',
  imageAttribute: 'src',
  nextPageSelector: '.pagination .page-link .next.active',

  // 3. محددات صفحة التفاصيل (Article Detail Selectors - تم التأكد من صحتها يدوياً)
  contentSelector: '#articleContent', // يستخرج نص المقال
  authorSelector: '.bylines a', // يستخرج اسم المؤلف

  // 4. محددات التنظيف (Clean-up Selectors)
  removeSelector: [
    '.quick-take-content', // لإزالة الملخص "Quick Take"
    'span.articleTooltip'  // لإزالة أدوات الأسعار التفاعلية داخل النص
  ]
};