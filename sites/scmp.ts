export default {
    // الرابط الأساسي للموقع
    url: 'https://www.scmp.com/',

    // التحقق من أن الرابط يتبع نمط المقالات (عادة يحتوي على قسم وتاريخ أو معرف)
    match: /scmp\.com\/.+\/article\/.+/,

    // العنوان - موجود داخل h1 مع كلاس ContentHeadline
    titleSelector: 'h1[data-qa="ContentHeadline-ContainerWithTag"] span',

    // العنوان الفرعي (Subtitle)
    subtitleSelector: 'h3[data-qa="ContentSubHeadline-ContainerWithTag"] p',

    // محتوى المقال
    // المقال مقسم إلى عدة أقسام داخل ContentBody-ContentBodyContainer
    contentSelector: 'section[data-qa="ContentBody-ContentBodyContainer"] p',

    // الكاتب
    authorSelector: 'div[data-qa="AuthorNames-AuthorNamesContainer"] a',

    // التاريخ
    dateSelector: 'time[data-qa="Article20Date-PublishedDate"]',

    // العناصر المراد حذفها (إعلانات، روابط قراءة إضافية، أزرار تفاعلية)
    removeSelector: [
        '.AdSlot-Container',
        '[data-qa="ArticleFurtherReadingWidget-Container"]',
        '[data-qa="ArticleActionWidget-Container"]',
        '[data-qa="ArticleSpeechInlineWidgetArticle20-Container"]',
        '.image-inline-container',
        '#gpt_unit_'
    ]
};