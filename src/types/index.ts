export type Lang = 'en' | 'ar';

export type LearningStyle = 'visual' | 'auditory' | 'reading' | 'kinesthetic';

export type QuestionType = 'multi-select' | 'rating';

export interface Option {
  id: string;
  en: string;
  ar: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  style: LearningStyle;
  en: string;
  ar: string;
  options?: Option[];
  ratingLabels?: {
    low: { en: string; ar: string };
    high: { en: string; ar: string };
  };
}

export type Answer =
  | { type: 'multi-select'; selected: string[] }
  | { type: 'rating'; value: number };

export type AnswersMap = Record<string, Answer>;

export interface LearnerInfo {
  name: string;
}
