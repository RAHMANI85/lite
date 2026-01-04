export default {
  url: 'https://coinpedia.org/news/',
  match: /coinpedia\./,
  language: "en-US",

  // 1. محدد الروابط (تم بنجاح سابقاً)
  articleLinkSelector: '.post-title a, h2.post-title a',

  // 2. العنوان (محدث بناءً على كود الفحص)
  // أزلنا المسافات واستخدمنا كلاسات المقال الفعلي
  titleSelector: 'h1.post-title.entry-title',

  // 3. التاريخ (محدث ليكون أكثر شمولاً)
  dateSelector: 'span.post_date_display, li.article-date',

  // 4. الكاتب (محدث بناءً على كود الفحص)
  // الموقع يستخدم هيكلية معقدة للكاتب، سنأخذ النص المباشر
  authorSelector: 'span.author_name',

  // 5. المحتوى (المحدد الأكثر استقراراً)
  contentSelector: '.entry-content.entry p',

  // 6. التنظيف (مهم جداً هنا)
  removeSelector: [
    '.popover__content',
    '.header_banner_ad',
    '.stream-item',
    '.ads-container', // Added from prompt
    'form',           // Added from prompt
    '.newsletter-subscription-form',
    'script',
    'style'
  ]
};