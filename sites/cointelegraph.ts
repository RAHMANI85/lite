export default {
  // 1. الأساسيات
  url: 'https://cointelegraph.com/category/latest-news',
  match: /cointelegraph\.com\/news\//, // التعديل لضمان العمل داخل روابط الأخبار فقط
  language: "en-US",

  // 2. محددات القائمة (نجحت بالفعل في محاولتك الأخيرة)
  articleLinkSelector: 'a.post-card-inline__title-link, .posts-listing__item a, a[href*="/news/"]',

  // 3. محددات صفحة المقال الفعلي (تحديث بناءً على الهيكل الديناميكي)

  // العنوان: إضافة خيارات بديلة لضمان المرونة
  titleSelector: 'h1.post__title, .post-content h1, [data-testid="post-title"]',

  // المحتوى: الموقع يغير الكلاس أحياناً بين post-content و post__content
  contentSelector: [
    '.post-content p',
    '.post__content p',
    '.post-content h2',
    '.post-content div.post-content__text p'
  ],

  // التاريخ: استهداف دقيق جداً
  dateSelector: 'time[data-testid="publication-date"], .post-meta__publication-date time',

  // الكاتب
  authorSelector: '[data-testid="meta-author-name"], .post-meta__author-name',

  // 4. التنظيف (إزالة العناصر التي تعيق القراءة)
  removeSelector: [
    '.newsletter-subscription-form',
    '.post-actions',
    '.ads-container',
    '.post-content__editor-disclaimer',
    'figure',
    '.tags-list',
    'script',
    'style'
  ],

  // 5. إعدادات المتصفح (ضرورية لـ Cointelegraph)
  // هذا الموقع يحتاج ثوانٍ قليلة لتحميل المحتوى عبر JavaScript
  waitForSelector: 'h1.post__title',
  renderDelay: 3000
};