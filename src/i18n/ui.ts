import type { Lang } from '../types';

export const t = (lang: Lang, en: string, ar: string) => (lang === 'ar' ? ar : en);

export const ui = (lang: Lang) => ({
  appTitle: t(lang, 'Learning Style Assessment', 'تقييم أسلوب التعلم'),
  appSubtitle: t(
    lang,
    'Help your teacher understand how you learn best',
    'ساعد معلمك على فهم الطريقة الأفضل لتعلمك'
  ),
  startBtn: t(lang, 'Start Assessment', 'ابدأ التقييم'),
  nameLabel: t(lang, 'Your name', 'اسمك'),
  namePlaceholder: t(lang, 'Enter your full name', 'أدخل اسمك الكامل'),
  nameRequired: t(lang, 'Please enter your name before starting.', 'يرجى إدخال اسمك قبل البدء.'),
  next: t(lang, 'Next', 'التالي'),
  back: t(lang, 'Back', 'السابق'),
  submit: t(lang, 'Submit', 'إرسال'),
  question: t(lang, 'Question', 'سؤال'),
  of: t(lang, 'of', 'من'),
  selectAll: t(lang, 'Select all that apply', 'اختر كل ما ينطبق عليك'),
  rateScale: t(lang, 'Rate from 1 (lowest) to 5 (highest)', 'قيّم من 1 (أدنى) إلى 5 (أعلى)'),
  selectAtLeastOne: t(lang, 'Please select at least one option.', 'يرجى اختيار خيار واحد على الأقل.'),
  ratingRequired: t(lang, 'Please choose a rating.', 'يرجى اختيار تقييم.'),
  sending: t(lang, 'Sending results…', 'جارٍ إرسال النتائج…'),
  thankYouTitle: t(lang, 'Thank you!', 'شكراً لك!'),
  thankYouBody: t(
    lang,
    'Your responses have been sent to your teacher. They will review your learning style and tailor lessons just for you.',
    'تم إرسال إجاباتك إلى معلمك. سيراجع أسلوب تعلمك ويصمم الدروس خصيصاً لك.'
  ),
  errorTitle: t(lang, 'Something went wrong', 'حدث خطأ ما'),
  errorBody: t(
    lang,
    'We could not send your results. Please try again or contact your teacher directly.',
    'لم نتمكن من إرسال نتائجك. حاول مجدداً أو تواصل مع معلمك مباشرةً.'
  ),
  retry: t(lang, 'Try Again', 'حاول مجدداً'),
  langToggle: t(lang, 'عربي', 'English'),
  styleLabels: {
    visual: t(lang, 'Visual', 'بصري'),
    auditory: t(lang, 'Auditory', 'سمعي'),
    reading: t(lang, 'Reading / Writing', 'قراءة / كتابة'),
    kinesthetic: t(lang, 'Kinesthetic', 'حركي'),
  },
});
