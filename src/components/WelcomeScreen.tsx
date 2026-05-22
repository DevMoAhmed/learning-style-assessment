import React from 'react';
import type { Lang, LearnerInfo } from '../types';
import { ui } from '../i18n/ui';
import './WelcomeScreen.css';

interface Props {
  lang: Lang;
  onStart: (info: LearnerInfo) => void;
}

const WelcomeScreen: React.FC<Props> = ({ lang, onStart }) => {
  const [name, setName] = React.useState('');
  const [error, setError] = React.useState('');
  const text = ui(lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError(text.nameRequired);
      return;
    }
    onStart({ name: name.trim() });
  };

  const styleIcons = [
    { icon: '👁️', label: text.styleLabels.visual, color: '#FF8C42' },
    { icon: '🎧', label: text.styleLabels.auditory, color: '#5C88DA' },
    { icon: '📖', label: text.styleLabels.reading, color: '#56A884' },
    { icon: '🤸', label: text.styleLabels.kinesthetic, color: '#D166A4' },
  ];

  return (
    <div className="welcome">
      <div className="welcome__hero">
        <div className="welcome__badge">✦</div>
        <h1 className="welcome__title">{text.appTitle}</h1>
        <p className="welcome__subtitle">{text.appSubtitle}</p>

        <div className="welcome__styles">
          {styleIcons.map((s) => (
            <div key={s.label} className="welcome__style-chip" style={{ '--chip-color': s.color } as React.CSSProperties}>
              <span className="welcome__style-icon">{s.icon}</span>
              <span className="welcome__style-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <form className="welcome__form" onSubmit={handleSubmit} noValidate>
        <label className="welcome__label" htmlFor="learner-name">{text.nameLabel}</label>
        <input
          id="learner-name"
          className={`welcome__input${error ? ' welcome__input--error' : ''}`}
          type="text"
          placeholder={text.namePlaceholder}
          value={name}
          onChange={(e) => { setName(e.target.value); setError(''); }}
          autoComplete="given-name"
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
        />
        {error && <p className="welcome__error" role="alert">{error}</p>}
        <button id="start-btn" type="submit" className="btn btn--primary btn--lg welcome__start-btn">
          {text.startBtn} →
        </button>
      </form>
    </div>
  );
};

export default WelcomeScreen;
