import React from 'react';
import type { Lang } from '../types';
import { ui } from '../i18n/ui';
import './HomeScreen.css';

interface Props {
  lang: Lang;
  onStartAssessment: () => void;
}

const HomeScreen: React.FC<Props> = ({ lang, onStartAssessment }) => {
  const text = ui(lang);
  const planHref = `${import.meta.env.BASE_URL}teaching-plan.html`;

  return (
    <div className="home">
      <div className="home__hero">
        <div className="home__badge">✦</div>
        <h1 className="home__title">{text.appTitle}</h1>
        <p className="home__subtitle">{text.hubTagline}</p>
      </div>

      <div className="home__cards">
        <button
          type="button"
          className="home__card"
          style={{ '--card-color': '#5C88DA' } as React.CSSProperties}
          onClick={onStartAssessment}
        >
          <span className="home__card-icon">🧭</span>
          <span className="home__card-body">
            <span className="home__card-title">{text.navAssessment}</span>
            <span className="home__card-desc">{text.navAssessmentDesc}</span>
          </span>
          <span className="home__card-arrow" aria-hidden="true">→</span>
        </button>

        <a
          className="home__card"
          style={{ '--card-color': '#E8743B' } as React.CSSProperties}
          href={planHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="home__card-icon">📘</span>
          <span className="home__card-body">
            <span className="home__card-title">{text.navPlan}</span>
            <span className="home__card-desc">{text.navPlanDesc}</span>
          </span>
          <span className="home__card-arrow" aria-hidden="true">↗</span>
        </a>

        <a
          className="home__card"
          style={{ '--card-color': '#8A5A83' } as React.CSSProperties}
          href={`${import.meta.env.BASE_URL}curriculum.html`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="home__card-icon">📚</span>
          <span className="home__card-body">
            <span className="home__card-title">{text.navCurriculum}</span>
            <span className="home__card-desc">{text.navCurriculumDesc}</span>
          </span>
          <span className="home__card-arrow" aria-hidden="true">↗</span>
        </a>

        <div
          className="home__card home__card--soon"
          style={{ '--card-color': '#56A884' } as React.CSSProperties}
          aria-disabled="true"
        >
          <span className="home__card-icon">✨</span>
          <span className="home__card-body">
            <span className="home__card-title">{text.navSoon}</span>
            <span className="home__card-desc">{text.navSoonDesc}</span>
          </span>
          <span className="home__card-tag">{text.soonTag}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
