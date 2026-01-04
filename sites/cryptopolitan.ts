export default {
  // 1. **URL و Match:** لتحديد الموقع المستهدف.
  url: 'https://www.cryptopolitan.com/news/',
  match: /cryptopolitan\./,
  language: "en-US",

  // 2. **Article Link Selector:** محدد رابط المقالة (الرابط الذي يحيط بالعنوان).
  articleLinkSelector: 'h3.elementor-heading-title a',

  // 3. **Next Page Selector:** غير متوفر في الكود المقدم.
  nextPageSelector: '',

  // 4. **Title Selector:** محدد عنوان المقالة.
  titleSelector: ['h3.elementor-heading-title a'],

  // 5. **Content Selector (Snippet):** لا يوجد مقتطف واضح للمقالة في بطاقة الأخبار المعروضة.
  contentSelector: [],

  // 6. **Date Selector:** محدد وقت النشر (مثل "11 minutes ago").
  dateSelector: ['.elementor-element-f45e518 .elementor-shortcode'],

  // 7. **Author Selector:** لم يتم العثور على اسم المؤلف في هذه البطاقة الإخبارية.
  authorSelector: [],

  // 8. **Remove Selector:** لا شيء للحذف.
  removeSelector: []
};