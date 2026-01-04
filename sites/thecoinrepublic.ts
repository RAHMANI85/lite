export default {
  url: 'https://www.thecoinrepublic.com/category/news/', // تم تغيير الرابط ليؤشر مباشرة على قسم الأخبار
  match: /thecoinrepublic\./,
  language: "en-US",
  articleLinkSelector: '.tdb_module_title a', // يحدد رابط المقال وعنوانه
  nextPageSelector: 'a.td-ajax-load-more',   // يحدد زر "Load more" لتحميل المزيد من المقالات
  titleSelector: '.tdb_module_title a',      // يحدد عنوان المقال
  contentSelector: '',                       // لا يوجد محدد لملخص/محتوى المقال في بنية القائمة
  dateSelector: '.tdb_module_date',          // يحدد تاريخ النشر
  authorSelector: '.tdb_module_author_name a', // يحدد اسم المؤلف ورابطه
  removeSelector: []
};