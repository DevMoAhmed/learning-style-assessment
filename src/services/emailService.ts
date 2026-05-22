import emailjs from '@emailjs/browser';
import type { AnswersMap, LearnerInfo } from '../types';
import { questions } from '../data/questions';

// ─── EmailJS configuration ───────────────────────────────────────────────────
const SERVICE_ID  = 'service_cb0a4jn';
const TEMPLATE_ID = 'template_e7gl41e';
const PUBLIC_KEY  = 'RunwLuIhUj749K4m0';

emailjs.init(PUBLIC_KEY);

// ─── Build plain-text report ─────────────────────────────────────────────────
function buildReport(learner: LearnerInfo, answers: AnswersMap): string {
  const lines: string[] = [];
  lines.push(`LEARNER STYLE ASSESSMENT RESULTS`);
  lines.push(`=================================`);
  lines.push(`Learner Name: ${learner.name}`);
  lines.push(`Date: ${new Date().toLocaleString('en-GB')}`);
  lines.push('');

  questions.forEach((q, idx) => {
    lines.push(`Q${idx + 1} [${q.style.toUpperCase()}] ${q.en}`);
    const ans = answers[q.id];
    if (!ans) {
      lines.push('  Answer: (not answered)');
    } else if (ans.type === 'rating') {
      lines.push(`  Rating: ${ans.value} / 5`);
      if (q.ratingLabels) {
        lines.push(`  (1 = ${q.ratingLabels.low.en}, 5 = ${q.ratingLabels.high.en})`);
      }
    } else if (ans.type === 'multi-select') {
      if (ans.selected.length === 0) {
        lines.push('  Selected: (none)');
      } else {
        ans.selected.forEach((optId) => {
          const opt = q.options?.find((o) => o.id === optId);
          if (opt) lines.push(`  ✓ ${opt.en}`);
        });
      }
    }
    lines.push('');
  });

  // ── Style score summary ──────────────────────────────────────────────────────
  lines.push('STYLE SUMMARY');
  lines.push('─────────────');
  const styleScores: Record<string, number[]> = {
    visual: [],
    auditory: [],
    reading: [],
    kinesthetic: [],
  };

  questions.forEach((q) => {
    const ans = answers[q.id];
    if (!ans) return;
    if (ans.type === 'rating') {
      styleScores[q.style].push(ans.value);
    } else if (ans.type === 'multi-select') {
      styleScores[q.style].push(ans.selected.length);
    }
  });

  const maxSelectable = 4; // max options selectable per multi-select Q
  const maxRating = 5;

  Object.entries(styleScores).forEach(([style, vals]) => {
    if (vals.length === 0) return;
    const avg = vals.reduce((a, b) => a + b, 0) / vals.length;
    // normalise to percentage
    const denominator = style === 'rating' ? maxRating : maxSelectable;
    const pct = Math.round((avg / denominator) * 100);
    lines.push(`${style.charAt(0).toUpperCase() + style.slice(1)}: ${pct}%`);
  });

  lines.push('');
  lines.push('─────────────────────────────────────');
  lines.push('Results sent by Learning Style Assessment App');

  return lines.join('\n');
}

// ─── Send email ───────────────────────────────────────────────────────────────
export async function sendResults(learner: LearnerInfo, answers: AnswersMap): Promise<void> {
  const report = buildReport(learner, answers);

  await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
    learner_name: learner.name,
    results: report,
    to_email: 'mohamedelhawary8@gmail.com',
  });
}
