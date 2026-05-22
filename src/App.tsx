import React from 'react';
import type { Lang, LearnerInfo, AnswersMap } from './types';
import { questions } from './data/questions';
import { sendResults } from './services/emailService';
import { ui } from './i18n/ui';
import LangToggle from './components/LangToggle';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import './App.css';

type AppStage = 'welcome' | 'quiz' | 'result';
type SendStatus = 'sending' | 'success' | 'error';

function App() {
  const [lang, setLang] = React.useState<Lang>('en');
  const [stage, setStage] = React.useState<AppStage>('welcome');
  const [learner, setLearner] = React.useState<LearnerInfo | null>(null);
  const [sendStatus, setSendStatus] = React.useState<SendStatus>('sending');
  const [pendingAnswers, setPendingAnswers] = React.useState<AnswersMap | null>(null);

  const text = ui(lang);
  const isRTL = lang === 'ar';

  const toggleLang = () => setLang((l) => (l === 'en' ? 'ar' : 'en'));

  const handleStart = (info: LearnerInfo) => {
    setLearner(info);
    setStage('quiz');
    window.scrollTo({ top: 0 });
  };

  const handleComplete = async (answers: AnswersMap) => {
    if (!learner) return;
    setPendingAnswers(answers);
    setSendStatus('sending');
    setStage('result');
    window.scrollTo({ top: 0 });
    try {
      await sendResults(learner, answers);
      setSendStatus('success');
    } catch (err) {
      console.error('EmailJS error:', err);
      setSendStatus('error');
    }
  };

  const handleRetry = async () => {
    if (!learner || !pendingAnswers) return;
    setSendStatus('sending');
    try {
      await sendResults(learner, pendingAnswers);
      setSendStatus('success');
    } catch (err) {
      console.error('EmailJS retry error:', err);
      setSendStatus('error');
    }
  };

  return (
    <div className="app" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="app__header">
        <div className="app__header-inner">
          <div className="app__logo">
            <span className="app__logo-icon">🧠</span>
            <span className="app__logo-text">{text.appTitle}</span>
          </div>
          <LangToggle lang={lang} onToggle={toggleLang} />
        </div>
      </header>

      {/* Main content */}
      <main className="app__main">
        {stage === 'welcome' && (
          <WelcomeScreen lang={lang} onStart={handleStart} />
        )}
        {stage === 'quiz' && (
          <QuizScreen
            lang={lang}
            questions={questions}
            learnerName={learner?.name ?? ''}
            onComplete={handleComplete}
          />
        )}
        {stage === 'result' && (
          <ResultScreen
            lang={lang}
            status={sendStatus}
            learnerName={learner?.name ?? ''}
            onRetry={handleRetry}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="app__footer">
        <p>© 2025 Learning Style Assessment · Built for language learners</p>
      </footer>
    </div>
  );
}

export default App;
