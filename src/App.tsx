import React from 'react';
import type { Lang, LearnerInfo, AnswersMap } from './types';
import { questions } from './data/questions';
import { sendResults } from './services/emailService';
import { ui } from './i18n/ui';
import LangToggle from './components/LangToggle';
import WelcomeScreen from './components/WelcomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import TestPanel from './components/TestPanel';
import './App.css';

type AppStage = 'welcome' | 'quiz' | 'result' | 'test-panel';
type SendStatus = 'sending' | 'success' | 'error';

function App() {
  const [lang, setLang] = React.useState<Lang>('en');
  const [stage, setStage] = React.useState<AppStage>('welcome');
  const [learner, setLearner] = React.useState<LearnerInfo | null>(null);
  const [sendStatus, setSendStatus] = React.useState<SendStatus>('sending');
  const [pendingAnswers, setPendingAnswers] = React.useState<AnswersMap | null>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (
      params.get('mode') === 'test' ||
      params.get('test') === 'true' ||
      window.location.hash === '#test'
    ) {
      setStage('test-panel');
    }
  }, []);

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
        {stage === 'test-panel' && (
          <TestPanel onBack={() => {
            // Clean hash and parameter from URL when going back
            window.location.hash = '';
            const url = new URL(window.location.href);
            url.searchParams.delete('mode');
            url.searchParams.delete('test');
            window.history.replaceState({}, '', url.pathname + url.search);
            setStage('welcome');
          }} />
        )}
      </main>

      {/* Footer */}
      <footer className="app__footer">
        <p>© 2025 Learning Style Assessment · Built for language learners</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.4, fontSize: '0.8rem' }}>
          <a
            href="#test"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '#test';
              setStage('test-panel');
            }}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            Developer Sandbox
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
