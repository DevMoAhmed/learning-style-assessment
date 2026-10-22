/* Default 30-day self-study plan for Mohammed (A2 → toward B1).
   Original content. ~60–75 min/day: ~40 min daily routine + ~25–35 min of the week's tasks.
   task = { id, title, desc, type:'app'|'external'|'produce'|'hidden', mins, link, hidden_goal } */
window.DEFAULT_PLAN = {
  start: "",
  daily: [
    { id:"d1", type:"external", mins:15, title:"Busuu — درس واحد", desc:"كمّل الدرس اللي عليه في Busuu. ركّز إنك تنطق الجمل بصوت عالي.", link:"https://www.busuu.com/" },
    { id:"d2", type:"external", mins:10, title:"Elllo — درس استماع واحد", desc:"اسمع الدرس مرتين: أول مرة من غير كلام مكتوب، تاني مرة مع الـ script.", link:"https://elllo.org/" },
    { id:"d3", type:"app", mins:10, title:"مراجعة الكلمات بالكتابة", desc:"تاب Vocabulary → ✍️ اكتب الكلمة. خلّص الكلمات المستحقة.", link:"curriculum.html#tab=vocab" },
    { id:"d4", type:"produce", mins:5, title:"Shadowing — رسالة صوتية ٣٠ ثانية", desc:"اختار جملتين من Elllo النهارده، كررهم ورا المتكلم، وابعت تسجيلك على الواتساب." }
  ],
  weeks: [
    { n:1, title:"الأسبوع ١ — to be + الوحدات ١–٢", goal:"تقول جمل am/is/are من غير ما تنسى الفعل، وتحفظ ٤٠ كلمة.",
      tasks: [
        { id:"w1a", type:"app", mins:15, title:"درس Verb to be", desc:"تاب Grammar → Verb “to be” → اسمع الأمثلة وكررها.", link:"curriculum.html#tab=grammar" },
        { id:"w1b", type:"app", mins:10, title:"لعبة am / is / are", desc:"العبها لحد ما تجيب الدرجة كاملة.", link:"curriculum.html#game=tobe" },
        { id:"w1c", type:"app", mins:25, title:"Unit 1 — Travel & Time", desc:"الكلمات + اختبار المعاني + القطعة (دوس على الكلمات المظلّلة).", link:"curriculum.html#unit=1" },
        { id:"w1d", type:"app", mins:25, title:"Unit 2 — The Experiment", desc:"نفس الخطوات: كلمات ← اختبار ← قطعة.", link:"curriculum.html#unit=2" },
        { id:"w1e", type:"app", mins:15, title:"اختبار الكتابة — الوحدات ١ و٢", desc:"في كل وحدة: ✍️ اختبار الكتابة. هدفك متوسط ٨٠٪+.", link:"curriculum.html#tab=journey" },
        { id:"w1f", type:"external", mins:10, title:"BBC 6 Minute English — حلقة واحدة", desc:"اختار أي حلقة، اكتب ٣ كلمات جديدة سمعتها.", link:"https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
        { id:"w1g", type:"external", mins:15, title:"أغنية بالكلمات", desc:"اختار أغنية بتحبها على LyricsTraining (مستوى Beginner) واملأ الكلمات الناقصة.", link:"https://lyricstraining.com/" },
        { id:"w1h", type:"produce", mins:10, title:"عرّف نفسك في دقيقة", desc:"رسالة صوتية: I am… / My father is… / My friends are… (٦ جمل على الأقل). ابعتها." },
        { id:"w1i", type:"hidden", mins:10, title:"تحدّي: لاعب الشطرنج المفضّل", desc:"ابعت رسالة صوتية تحكي فيها عن لاعب شطرنج بتحبه: هو مين، منين، عامل إزاي.", hidden_goal:"تستخدم he is / he isn't بشكل طبيعي من غير ما تفكّر في القاعدة." }
      ] },
    { n:2, title:"الأسبوع ٢ — Present simple + كلمات التكرار + الوحدات ٣–٥", goal:"تحكي روتينك بـ always/usually/never وتفتكر الـ -s مع he/she/it.",
      tasks: [
        { id:"w2a", type:"app", mins:15, title:"درس Present simple", desc:"تاب Grammar → Present simple → «اشرح أكتر». ركّز على قاعدة الـ -s والنفي بـ doesn't.", link:"curriculum.html#tab=grammar" },
        { id:"w2b", type:"app", mins:10, title:"لعبة Present simple", desc:"العبها مرتين في يومين مختلفين.", link:"curriculum.html#game=presentsimple" },
        { id:"w2c", type:"app", mins:10, title:"سلّم التكرار", desc:"رتّب always → never. اسمع النغمة بتعلى.", link:"curriculum.html#game=frequency" },
        { id:"w2d", type:"app", mins:25, title:"Unit 3 — Space & School", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=3" },
        { id:"w2e", type:"app", mins:25, title:"Unit 4 — Habits & Feelings", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=4" },
        { id:"w2f", type:"app", mins:25, title:"Unit 5 — Sports & Health", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=5" },
        { id:"w2g", type:"external", mins:10, title:"BBC 6 Minute English — حلقة", desc:"اسمع واكتب جملتين فيهم present simple.", link:"https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
        { id:"w2h", type:"produce", mins:10, title:"روتين يومك", desc:"رسالة صوتية دقيقة: يومك من الصبح لليل. استخدم always / usually / sometimes / never. ابعتها." },
        { id:"w2i", type:"hidden", mins:10, title:"تحدّي: علّمني افتتاحية شطرنج", desc:"سجّل رسالة صوتية تشرح فيها لمبتدئ إزاي يلعب افتتاحية بتحبها، خطوة خطوة.", hidden_goal:"Present simple للتعليمات والحقائق + He moves / It controls (الـ -s مع he/it)." },
        { id:"w2j", type:"hidden", mins:10, title:"تحدّي: ٥ أسئلة لحد في البيت", desc:"اسأل حد في البيت ٥ أسئلة عن يومه بالإنجليزي واكتب إجاباته.", hidden_goal:"تكوين أسئلة Do/Does + الإجابة بـ he/she + -s." }
      ] },
    { n:3, title:"الأسبوع ٣ — Present continuous + الفرق + الوحدات ٦–٨", goal:"تفرّق بين «عادةً» و«دلوقتي» وتستخدم am/is/are + ing صح.",
      tasks: [
        { id:"w3a", type:"app", mins:10, title:"درس Present continuous", desc:"تاب Grammar → Present continuous → «اشرح أكتر».", link:"curriculum.html#tab=grammar" },
        { id:"w3b", type:"app", mins:10, title:"لعبة Present continuous", desc:"العبها لحد الدرجة الكاملة.", link:"curriculum.html#game=presentcont" },
        { id:"w3c", type:"app", mins:20, title:"Simple ولا Continuous؟ — ٣ مستويات", desc:"عدّي المستويات التلاتة. لو وقعت في مستوى، أعِده تاني يوم.", link:"curriculum.html#game=simplecont" },
        { id:"w3d", type:"app", mins:25, title:"Unit 6 — Culture & Style", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=6" },
        { id:"w3e", type:"app", mins:25, title:"Unit 7 — People & Peace", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=7" },
        { id:"w3f", type:"app", mins:25, title:"Unit 8 — Actions & Plans", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=8" },
        { id:"w3g", type:"external", mins:15, title:"أغنية بالكلمات", desc:"أغنية جديدة على LyricsTraining — دوّر فيها على جمل فيها -ing.", link:"https://lyricstraining.com/" },
        { id:"w3h", type:"produce", mins:10, title:"اللي بيحصل حواليك دلوقتي", desc:"رسالة صوتية ٤٠ ثانية: بص حواليك ووصف اللي الناس بتعمله دلوقتي. ابعتها." },
        { id:"w3i", type:"hidden", mins:15, title:"تحدّي: معلّق شطرنج", desc:"افتح أي ماتش شطرنج (live أو فيديو) وعلّق عليه بصوتك دقيقة كاملة كأنك معلّق.", hidden_goal:"Present continuous تلقائي: He is attacking / She is moving the queen." },
        { id:"w3j", type:"hidden", mins:10, title:"تحدّي: ٣ captions", desc:"اختار ٣ صور من موبايلك واكتب لكل واحدة caption إنجليزي زي إنستجرام. ابعتهم.", hidden_goal:"الاختيار بين simple و continuous حسب الصورة (عادة ولا لحظة)." }
      ] },
    { n:4, title:"الأسبوع ٤ — مراجعة + الوحدات ٩–١٠ + مشروع صغير", goal:"تثبّت كل اللي فات وتسجّل تعريف بنفسك دقيقتين.",
      tasks: [
        { id:"w4a", type:"app", mins:25, title:"Unit 9 — Animals & Places", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=9" },
        { id:"w4b", type:"app", mins:25, title:"Unit 10 — Nature & Focus", desc:"كلمات ← اختبار ← كتابة ← قطعة.", link:"curriculum.html#unit=10" },
        { id:"w4c", type:"app", mins:15, title:"🔀 رتّب الحروف — كل القاموس", desc:"تاب Vocabulary → 🔀 رتّب الحروف.", link:"curriculum.html#tab=vocab" },
        { id:"w4d", type:"app", mins:15, title:"راجع بنك الأخطاء", desc:"تاب Games → بنك الأخطاء تحت. اقرا كل غلطة بصوت عالي صح.", link:"curriculum.html#tab=games" },
        { id:"w4e", type:"app", mins:15, title:"لعبة Articles — a / an / the", desc:"العبها مرة.", link:"curriculum.html#game=articles" },
        { id:"w4f", type:"external", mins:10, title:"BBC 6 Minute English — حلقة", desc:"اسمع حلقة واكتب ٣ كلمات جديدة في القاموس.", link:"https://www.bbc.co.uk/learningenglish/english/features/6-minute-english" },
        { id:"w4g", type:"produce", mins:20, title:"🎬 المشروع: عرّف نفسك في دقيقتين", desc:"سجّل دقيقتين: انت مين، بتعمل إيه كل يوم، بتحب إيه (شطرنج، تكنولوجي، أغاني)، وبتعمل إيه الأيام دي. ابعته." },
        { id:"w4h", type:"hidden", mins:15, title:"تحدّي: اشرح تطبيق بتحبه", desc:"سجّل رسالة صوتية تشرح فيها لحد تطبيق أو لعبة على موبايلك: بيعمل إيه وإنت بتعمل إيه فيه دلوقتي.", hidden_goal:"خلط الأزمنة صح: حقائق بـ simple + اللي بتعمله دلوقتي بـ continuous." }
      ] },
    { n:5, title:"اليومين الأخيرين — اختبار نهائي", goal:"تقيس نفسك وتقارن بأول الشهر.",
      tasks: [
        { id:"w5a", type:"app", mins:20, title:"اختبار الكتابة — ٣ وحدات عشوائي", desc:"اختار ٣ وحدات واعمل اختبار الكتابة. سجّل المتوسط في الملاحظة.", link:"curriculum.html#tab=journey" },
        { id:"w5b", type:"app", mins:20, title:"Simple ولا Continuous — كل المستويات", desc:"من الأول للآخر من غير ما تقع.", link:"curriculum.html#game=simplecont" },
        { id:"w5c", type:"produce", mins:15, title:"أعد تسجيل تعريف نفسك", desc:"سجّل نفس التعريف (دقيقتين) واسمعه جنب تسجيل الأسبوع ١. اكتب في الملاحظة إيه اللي اتحسّن. ابعته." }
      ] }
  ],
  log: {},
  wlog: {}
};
