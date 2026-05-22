import React from 'react';
import type { Lang, Question, AnswersMap, Answer } from '../types';
import { ui } from '../i18n/ui';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';
import './QuizScreen.css';

interface Props {
  lang: Lang;
  questions: Question[];
  learnerName: string;
  onComplete: (answers: AnswersMap) => void;
}

const QuizScreen: React.FC<Props> = ({ lang, questions, learnerName: _learnerName, onComplete }) => {
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<AnswersMap>({});
  const [validationMsg, setValidationMsg] = React.useState('');
  const text = ui(lang);
  const isRTL = lang === 'ar';

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const progress = ((current) / questions.length) * 100;

  const handleChange = (answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [q.id]: answer }));
    setValidationMsg('');
  };

  const validate = (): boolean => {
    const ans = answers[q.id];
    if (!ans) {
      setValidationMsg(q.type === 'rating' ? text.ratingRequired : text.selectAtLeastOne);
      return false;
    }
    if (ans.type === 'multi-select' && ans.selected.length === 0) {
      setValidationMsg(text.selectAtLeastOne);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validate()) return;
    if (isLast) {
      onComplete(answers);
    } else {
      setCurrent((c) => c + 1);
      setValidationMsg('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
      setValidationMsg('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const hint = q.type === 'multi-select' ? text.selectAll : text.rateScale;

  return (
    <div className="quiz" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Progress */}
      <div className="quiz__progress-area">
        <span className="quiz__counter">
          {text.question} {current + 1} {text.of} {questions.length}
        </span>
        <ProgressBar value={progress} />
      </div>

      {/* Card */}
      <QuestionCard
        key={q.id}
        question={q}
        lang={lang}
        answer={answers[q.id]}
        onChange={handleChange}
        hint={hint}
      />

      {/* Validation */}
      {validationMsg && (
        <p className="quiz__validation" role="alert">{validationMsg}</p>
      )}

      {/* Navigation */}
      <div className="quiz__nav">
        {current > 0 && (
          <button id="back-btn" className="btn btn--ghost" onClick={handleBack} type="button">
            ← {text.back}
          </button>
        )}
        <button
          id={isLast ? 'submit-btn' : 'next-btn'}
          className="btn btn--primary quiz__next-btn"
          onClick={handleNext}
          type="button"
        >
          {isLast ? text.submit : `${text.next} →`}
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
