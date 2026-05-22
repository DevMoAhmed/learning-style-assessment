import React from 'react';
import type { Lang, Question, Answer } from '../types';
import './QuestionCard.css';

interface Props {
  question: Question;
  lang: Lang;
  answer: Answer | undefined;
  onChange: (answer: Answer) => void;
  hint?: string;
}

const STYLE_META: Record<string, { icon: string; color: string }> = {
  visual:       { icon: '👁️',  color: '#FF8C42' },
  auditory:     { icon: '🎧', color: '#5C88DA' },
  reading:      { icon: '📖', color: '#56A884' },
  kinesthetic:  { icon: '🤸', color: '#D166A4' },
};

const QuestionCard: React.FC<Props> = ({ question, lang, answer, onChange, hint }) => {
  const q = lang === 'ar' ? question.ar : question.en;
  const meta = STYLE_META[question.style];
  const isRTL = lang === 'ar';

  // ── Multi-select handler ───────────────────────────────────────────────────
  const handleSelect = (optId: string) => {
    const prev = answer?.type === 'multi-select' ? answer.selected : [];
    const next = prev.includes(optId) ? prev.filter((x) => x !== optId) : [...prev, optId];
    onChange({ type: 'multi-select', selected: next });
  };

  // ── Rating handler ─────────────────────────────────────────────────────────
  const handleRating = (val: number) => {
    onChange({ type: 'rating', value: val });
  };

  return (
    <div className="qcard" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Style badge */}
      <div
        className="qcard__badge"
        style={{ '--badge-color': meta.color } as React.CSSProperties}
      >
        <span>{meta.icon}</span>
      </div>

      {/* Question text */}
      <p className="qcard__text">{q}</p>

      {hint && <p className="qcard__hint">{hint}</p>}

      {/* Options */}
      {question.type === 'multi-select' && question.options && (
        <div className="qcard__options">
          {question.options.map((opt) => {
            const selected = answer?.type === 'multi-select' && answer.selected.includes(opt.id);
            const label = lang === 'ar' ? opt.ar : opt.en;
            return (
              <button
                key={opt.id}
                id={`opt-${opt.id}`}
                className={`qcard__option${selected ? ' qcard__option--selected' : ''}`}
                onClick={() => handleSelect(opt.id)}
                aria-pressed={selected}
                type="button"
              >
                <span className="qcard__option-check">{selected ? '✓' : ''}</span>
                {label}
              </button>
            );
          })}
        </div>
      )}

      {/* Rating */}
      {question.type === 'rating' && question.ratingLabels && (
        <div className="qcard__rating-wrap">
          <div className="qcard__rating-labels">
            <span>{lang === 'ar' ? question.ratingLabels.low.ar : question.ratingLabels.low.en}</span>
            <span>{lang === 'ar' ? question.ratingLabels.high.ar : question.ratingLabels.high.en}</span>
          </div>
          <div className="qcard__rating-btns" role="group" aria-label="Rating">
            {[1, 2, 3, 4, 5].map((v) => {
              const picked = answer?.type === 'rating' && answer.value === v;
              return (
                <button
                  key={v}
                  id={`rating-${question.id}-${v}`}
                  className={`qcard__rating-btn${picked ? ' qcard__rating-btn--picked' : ''}`}
                  onClick={() => handleRating(v)}
                  aria-pressed={picked}
                  type="button"
                  style={{ '--btn-color': meta.color } as React.CSSProperties}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
