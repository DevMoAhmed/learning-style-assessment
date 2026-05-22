import React from 'react';
import type { Lang } from '../types';
import { ui } from '../i18n/ui';
import './LangToggle.css';

interface Props {
  lang: Lang;
  onToggle: () => void;
}

const LangToggle: React.FC<Props> = ({ lang, onToggle }) => {
  const text = ui(lang);
  return (
    <button
      id="lang-toggle-btn"
      className="lang-toggle"
      onClick={onToggle}
      aria-label="Toggle language"
    >
      <span className="lang-toggle__icon">{lang === 'ar' ? '🇬🇧' : '🇸🇦'}</span>
      {text.langToggle}
    </button>
  );
};

export default LangToggle;
