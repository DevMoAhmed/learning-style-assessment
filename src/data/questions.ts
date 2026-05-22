import type { Question } from '../types';

export const questions: Question[] = [
  // ── Visual ──────────────────────────────────────────────────────────────────
  {
    id: 'v1',
    type: 'multi-select',
    style: 'visual',
    en: 'When you try to remember new vocabulary, which of the following do you use? (Select all that apply)',
    ar: 'عندما تحاول تذكر مفردات جديدة، ماذا تفعل؟ (اختر كل ما ينطبق عليك)',
    options: [
      { id: 'v1a', en: 'I draw pictures or mind maps next to the words', ar: 'أرسم صوراً أو خرائط ذهنية بجانب الكلمات' },
      { id: 'v1b', en: 'I colour-code or highlight words', ar: 'أستخدم الألوان أو أضغط على الكلمات بقلم تمييز' },
      { id: 'v1c', en: 'I imagine a scene in my head linked to the word', ar: 'أتخيل مشهداً في ذهني مرتبطاً بالكلمة' },
      { id: 'v1d', en: 'I write the word repeatedly until I remember it', ar: 'أكتب الكلمة مرات عديدة حتى أحفظها' },
    ],
  },
  {
    id: 'v2',
    type: 'rating',
    style: 'visual',
    en: 'How much do diagrams, charts, or pictures help you understand a new grammar rule?',
    ar: 'كم تساعدك الرسوم البيانية أو المخططات أو الصور على فهم قاعدة نحوية جديدة؟',
    ratingLabels: {
      low: { en: 'Not at all', ar: 'لا تساعد أبداً' },
      high: { en: 'Extremely helpful', ar: 'مفيدة جداً' },
    },
  },
  {
    id: 'v3',
    type: 'multi-select',
    style: 'visual',
    en: 'Which classroom materials appeal most to you?',
    ar: 'أي من المواد التعليمية تعجبك أكثر؟',
    options: [
      { id: 'v3a', en: 'Flashcards with images', ar: 'بطاقات تعليمية بها صور' },
      { id: 'v3b', en: 'Colourful textbook pages', ar: 'صفحات كتاب ملوّنة' },
      { id: 'v3c', en: 'Videos or animated explainers', ar: 'مقاطع فيديو أو شروحات متحركة' },
      { id: 'v3d', en: 'Whiteboards and drawn diagrams', ar: 'السبورة والرسوم التوضيحية' },
    ],
  },

  // ── Auditory ─────────────────────────────────────────────────────────────────
  {
    id: 'a1',
    type: 'multi-select',
    style: 'auditory',
    en: 'How do you prefer to practise speaking or pronunciation?',
    ar: 'كيف تفضّل التدرب على الكلام أو النطق؟',
    options: [
      { id: 'a1a', en: 'Listening to native speakers and repeating', ar: 'الاستماع للناطقين الأصليين والتكرار بعدهم' },
      { id: 'a1b', en: 'Recording my voice and listening back', ar: 'تسجيل صوتي وسماعه لاحقاً' },
      { id: 'a1c', en: 'Having conversations with my teacher or classmates', ar: 'إجراء محادثات مع المعلم أو الزملاء' },
      { id: 'a1d', en: 'Singing songs or rhymes in the language', ar: 'الغناء أو ترديد أغاني وقوافٍ باللغة' },
    ],
  },
  {
    id: 'a2',
    type: 'rating',
    style: 'auditory',
    en: 'How well do you remember something after hearing it explained out loud (vs. reading it)?',
    ar: 'إلى أي مدى تتذكر المعلومة بعد سماعها شفهياً مقارنةً بقراءتها؟',
    ratingLabels: {
      low: { en: 'I learn much better by reading', ar: 'أتعلم بشكل أفضل بكثير عن طريق القراءة' },
      high: { en: 'I learn much better by listening', ar: 'أتعلم بشكل أفضل بكثير عن طريق الاستماع' },
    },
  },
  {
    id: 'a3',
    type: 'multi-select',
    style: 'auditory',
    en: 'Which of these activities do you enjoy most when learning a language?',
    ar: 'أي من هذه الأنشطة تستمتع بها أكثر عند تعلم لغة؟',
    options: [
      { id: 'a3a', en: 'Listening to podcasts or radio in the target language', ar: 'الاستماع إلى بودكاست أو راديو باللغة الهدف' },
      { id: 'a3b', en: 'Watching films or series with no subtitles', ar: 'مشاهدة أفلام أو مسلسلات بدون ترجمة' },
      { id: 'a3c', en: 'Joining speaking clubs or group discussions', ar: 'الانضمام إلى نوادي محادثة أو مناقشات جماعية' },
      { id: 'a3d', en: 'Reciting vocabulary lists aloud', ar: 'ترديد قوائم المفردات بصوت عالٍ' },
    ],
  },

  // ── Reading / Writing ────────────────────────────────────────────────────────
  {
    id: 'r1',
    type: 'multi-select',
    style: 'reading',
    en: 'When studying grammar, what do you usually do?',
    ar: 'عند دراسة القواعد النحوية، ماذا تفعل عادةً؟',
    options: [
      { id: 'r1a', en: 'Read the grammar rule carefully from a book', ar: 'أقرأ القاعدة النحوية بعناية من كتاب' },
      { id: 'r1b', en: 'Write my own example sentences', ar: 'أكتب جمل من تأليفي كأمثلة' },
      { id: 'r1c', en: 'Make written notes or summaries', ar: 'أدوّن ملاحظات أو ملخصات مكتوبة' },
      { id: 'r1d', en: 'Look up multiple definitions in dictionaries', ar: 'أبحث عن تعريفات متعددة في القواميس' },
    ],
  },
  {
    id: 'r2',
    type: 'rating',
    style: 'reading',
    en: 'How much do you enjoy reading articles, books, or stories in the language you are learning?',
    ar: 'كم تستمتع بقراءة مقالات أو كتب أو قصص باللغة التي تتعلمها؟',
    ratingLabels: {
      low: { en: 'I dislike reading in the new language', ar: 'لا أحب القراءة باللغة الجديدة' },
      high: { en: 'I love reading in the new language', ar: 'أحب القراءة باللغة الجديدة كثيراً' },
    },
  },
  {
    id: 'r3',
    type: 'multi-select',
    style: 'reading',
    en: 'Which writing activities help you learn most?',
    ar: 'أي من أنشطة الكتابة تساعدك على التعلم أكثر؟',
    options: [
      { id: 'r3a', en: 'Keeping a daily journal in the target language', ar: 'كتابة يوميات بالغة الهدف' },
      { id: 'r3b', en: 'Writing essays or structured paragraphs', ar: 'كتابة مقالات أو فقرات منظمة' },
      { id: 'r3c', en: 'Copying sentences to practise spelling', ar: 'نسخ جمل للتدرب على الإملاء' },
      { id: 'r3d', en: 'Writing lists: vocabulary, grammar rules, etc.', ar: 'كتابة قوائم: مفردات، قواعد نحوية، إلخ' },
    ],
  },

  // ── Kinesthetic ──────────────────────────────────────────────────────────────
  {
    id: 'k1',
    type: 'multi-select',
    style: 'kinesthetic',
    en: 'How do you best learn new vocabulary?',
    ar: 'كيف تتعلم المفردات الجديدة بشكل أفضل؟',
    options: [
      { id: 'k1a', en: 'By using the word immediately in a real conversation', ar: 'باستخدام الكلمة فوراً في محادثة حقيقية' },
      { id: 'k1b', en: 'Through games, quizzes, or role-playing', ar: 'من خلال ألعاب أو اختبارات أو تمثيل أدوار' },
      { id: 'k1c', en: 'By linking words to physical actions or gestures', ar: 'بربط الكلمات بحركات أو إيماءات جسدية' },
      { id: 'k1d', en: 'By doing hands-on activities related to the topic', ar: 'من خلال أنشطة عملية مرتبطة بالموضوع' },
    ],
  },
  {
    id: 'k2',
    type: 'rating',
    style: 'kinesthetic',
    en: 'How much do you prefer practising a skill by doing it rather than studying theory first?',
    ar: 'كم تفضّل ممارسة المهارة عملياً بدلاً من دراسة النظرية أولاً؟',
    ratingLabels: {
      low: { en: 'I prefer theory first', ar: 'أفضّل الدراسة النظرية أولاً' },
      high: { en: 'I prefer jumping straight into practice', ar: 'أفضّل التطبيق المباشر فوراً' },
    },
  },
  {
    id: 'k3',
    type: 'multi-select',
    style: 'kinesthetic',
    en: 'Which classroom activities energise you the most?',
    ar: 'أي الأنشطة الصفية تنشّطك أكثر؟',
    options: [
      { id: 'k3a', en: 'Field trips or language-immersion experiences', ar: 'الرحلات الميدانية أو تجارب الانغماس اللغوي' },
      { id: 'k3b', en: 'Group projects and collaborative tasks', ar: 'مشاريع جماعية ومهام تعاونية' },
      { id: 'k3c', en: 'Drama, skits, or storytelling activities', ar: 'مسرح أو تمثيليات قصيرة أو سرد القصص' },
      { id: 'k3d', en: 'Using language apps with interactive exercises', ar: 'استخدام تطبيقات لغوية بتمارين تفاعلية' },
    ],
  },

  // ── Mixed / General ──────────────────────────────────────────────────────────
  {
    id: 'g1',
    type: 'rating',
    style: 'visual',
    en: 'When you get lost in a lesson, how likely are you to ask the teacher to draw or show an example?',
    ar: 'عندما تضيع في درس، كم يُرجَّح أن تطلب من المعلم رسم مثال أو إظهاره؟',
    ratingLabels: {
      low: { en: 'Very unlikely', ar: 'غير محتمل جداً' },
      high: { en: 'Very likely', ar: 'محتمل جداً' },
    },
  },
  {
    id: 'g2',
    type: 'rating',
    style: 'auditory',
    en: 'How often do you talk to yourself (or mutter) when trying to memorise something?',
    ar: 'كم مرة تتحدث مع نفسك (أو تتمتم) عند محاولة حفظ شيء ما؟',
    ratingLabels: {
      low: { en: 'Never', ar: 'أبداً' },
      high: { en: 'Almost always', ar: 'دائماً تقريباً' },
    },
  },
  {
    id: 'g3',
    type: 'rating',
    style: 'reading',
    en: 'After a lesson, how likely are you to re-read your notes or write a summary?',
    ar: 'بعد الدرس، كم يُرجَّح أن تعيد قراءة ملاحظاتك أو تكتب ملخصاً؟',
    ratingLabels: {
      low: { en: 'Very unlikely', ar: 'غير محتمل جداً' },
      high: { en: 'Very likely', ar: 'محتمل جداً' },
    },
  },
  {
    id: 'g4',
    type: 'rating',
    style: 'kinesthetic',
    en: 'How comfortable are you with making mistakes while speaking in class?',
    ar: 'كم أنت مرتاح لارتكاب الأخطاء أثناء التحدث في الفصل؟',
    ratingLabels: {
      low: { en: 'I feel very anxious about mistakes', ar: 'أشعر بقلق شديد من الأخطاء' },
      high: { en: 'Mistakes don\'t bother me at all', ar: 'الأخطاء لا تزعجني أبداً' },
    },
  },
  {
    id: 'g5',
    type: 'multi-select',
    style: 'kinesthetic',
    en: 'If you could redesign how you are taught, which methods would you include?',
    ar: 'إذا كان بإمكانك إعادة تصميم طريقة تعليمك، ماذا ستضمّن؟',
    options: [
      { id: 'g5a', en: 'More visual aids and multimedia', ar: 'المزيد من الوسائل البصرية والوسائط المتعددة' },
      { id: 'g5b', en: 'More listening and speaking exercises', ar: 'المزيد من تمارين الاستماع والتحدث' },
      { id: 'g5c', en: 'More reading and writing practice', ar: 'المزيد من التدريب على القراءة والكتابة' },
      { id: 'g5d', en: 'More hands-on and interactive activities', ar: 'المزيد من الأنشطة التفاعلية والعملية' },
    ],
  },
];
