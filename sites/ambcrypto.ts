export default {
  // معلومات أساسية
  url: 'https://ambcrypto.com/category/new-news/',
  language: "en-US",
  match: /ambcrypto\./,

  // محددات القائمة (List Selectors)
  articleLinkSelector: 'li.home-post a',
  nextPageSelector: null,

  // محددات صفحة التفاصيل (Article Detail Selectors)
  // 💡 تم التصحيح لاستخدام الفئات الجديدة التي وفرتها
  titleSelector: 'h1.post-title.entry-title',
  contentSelector: 'div.mvp-post-content-body',

  // محدد التاريخ (تم الإبقاء على المحدد الذي طلبته سابقًا)
  dateSelector: 'time[data-gtm-locator="publication_date"]',

  authorSelector: 'span.mvp-post-author-name a',

  // محددات التنظيف (Clean-up Selectors)
  removeSelector: [
    '#mvp-related-posts',
    '.mvp-post-gallery-wrap',
    'p.mvp-post-tags-wrap',
    'figure',
    'div.mvp-article-ad-wrap',
    'div.mvp-post-info-wrap'
  ]
};