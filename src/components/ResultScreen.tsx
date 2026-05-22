import React from 'react';
import type { Lang } from '../types';
import { ui } from '../i18n/ui';
import './ResultScreen.css';

type Status = 'sending' | 'success' | 'error';

interface Props {
  lang: Lang;
  status: Status;
  learnerName: string;
  onRetry: () => void;
}

const ResultScreen: React.FC<Props> = ({ lang, status, learnerName, onRetry }) => {
  const text = ui(lang);
  const isRTL = lang === 'ar';

  if (status === 'sending') {
    return (
      <div className="result" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="result__spinner" aria-label="Sending…" />
        <p className="result__sending-text">{text.sending}</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="result result--error" dir={isRTL ? 'rtl' : 'ltr'}>
        <div className="result__icon result__icon--error">✗</div>
        <h2 className="result__title">{text.errorTitle}</h2>
        <p className="result__body">{text.errorBody}</p>
        <button id="retry-btn" className="btn btn--primary" onClick={onRetry}>
          {text.retry}
        </button>
      </div>
    );
  }

  // success
  return (
    <div className="result result--success" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="result__confetti" aria-hidden="true">
        {['🎉', '✨', '🌟', '🎊', '💫'].map((e, i) => (
          <span key={i} className="result__confetti-piece" style={{ '--i': i } as React.CSSProperties}>{e}</span>
        ))}
      </div>
      <div className="result__icon result__icon--success">✓</div>
      <h2 className="result__title">
        {text.thankYouTitle} {learnerName ? `${learnerName}!` : ''}
      </h2>
      <p className="result__body">{text.thankYouBody}</p>
    </div>
  );
};

export default ResultScreen;
