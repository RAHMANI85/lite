export default {
  // 1. معلومات أساسية
  url: 'https://cryptopotato.com/crypto-news/',
  match: /cryptopotato\.com/,
  language: "en-US",

  // 2. محدد روابط المقالات (في صفحة القائمة)
  // عادة ما تكون العناوين في CryptoPotato داخل h3 أو h2
  articleLinkSelector: '.media-body h3 a, h2.heading-2 a',

  // 3. محدد العنوان (داخل المقال)
  // بناءً على الكود: <h1> داخل .post-title-area
  titleSelector: '.post-title-area h1',

  // 4. محدد المحتوى (نص الخبر)
  // بناءً على الكود: المحتوى موجود داخل .post-details-content
  contentSelector: '.post-details-content p',

  // 5. محدد التاريخ
  // بناءً على الكود: <span class="post-time">
  dateSelector: '.post-time',

  // 6. محدد الكاتب
  // بناءً على الكود: <div class="name-post"><a ...>
  authorSelector: '.name-post a',

  // 7. محددات الحذف (لتنظيف المحتوى من الإعلانات والتغريدات)
  removeSelector: [
    '.twitter-tweet',      // حذف التغريدات المضمنة
    '.code-block',         // حذف كود الإعلانات (AdButler)
    '.single-post-tags',   // حذف التاغات في الأسفل
    'script',
    'style',
    '.wp-caption-text'     // حذف وصف الصور إذا كنت لا تريده
  ],

  // 8. الانتقال للصفحة التالية
  nextPageSelector: 'a.next.page-numbers'
};