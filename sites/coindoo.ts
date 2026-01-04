export default {
  // 1. URL و Match
  url: 'https://coindoo.com/news-5/',
  match: /coindoo\./,
  language: "en-US",

  // 2. محددات القائمة (List Selectors)
  articleContainerSelector: 'article',
  articleLinkSelector: 'h2.post-title a',

  // 3. الترحيل
  nextPageSelector: 'a.next.page-numbers',

  // 4. محددات صفحة التفاصيل (Article Detail Selectors)
  // تم التحديث بناءً على الـ HTML للصفحة الداخلية الذي أرسلته

  // العنوان: يستخدم كلاس single-post-title في الصفحة الداخلية
  titleSelector: 'h1.single-post-title',

  // التاريخ والوقت: استهداف عناصر القائمة التي تحمل كلاس post-date
  dateSelector: 'li.post-date',

  // الكاتب: (بناءً على التوقعات، عادة يكون في الـ post-meta)
  authorSelector: 'li.post-author a',

  // المحتوى: الفقرة الافتتاحية (lead) وباقي المحتوى
  // استخدمت مصفوفة لضمان جلب المقدمة والنص الأساسي
  contentSelector: ['p.lead', '.entry-content', 'article p'],

  // 5. التنظيف
  removeSelector: [
    'script',
    'style',
    'li.post-date:contains("|")' // إزالة الفاصل العمودي إذا ظهر كنص
  ]
};