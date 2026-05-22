import React from 'react';
import type { AnswersMap } from '../types';
import { questions } from '../data/questions';
import { sendResults } from '../services/emailService';
import './TestPanel.css';

interface TestPanelProps {
  onBack: () => void;
}

function TestPanel({ onBack }: TestPanelProps) {
  const [name, setName] = React.useState('Simulated Learner');
  const [visual, setVisual] = React.useState(4);
  const [auditory, setAuditory] = React.useState(3);
  const [reading, setReading] = React.useState(5);
  const [kinesthetic, setKinesthetic] = React.useState(2);

  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = React.useState('');

  const generateFakeAnswers = (): AnswersMap => {
    const fakeAnswers: AnswersMap = {};
    questions.forEach((q) => {
      let score = 3;
      if (q.style === 'visual') score = visual;
      if (q.style === 'auditory') score = auditory;
      if (q.style === 'reading') score = reading;
      if (q.style === 'kinesthetic') score = kinesthetic;

      if (q.type === 'rating') {
        fakeAnswers[q.id] = { type: 'rating', value: score };
      } else if (q.type === 'multi-select') {
        const numOptionsToSelect = Math.min(q.options?.length ?? 0, Math.max(0, score - 1));
        fakeAnswers[q.id] = {
          type: 'multi-select',
          selected: q.options?.slice(0, numOptionsToSelect).map((o) => o.id) ?? [],
        };
      }
    });
    return fakeAnswers;
  };

  const handleSend = async () => {
    if (!name.trim()) {
      setStatus('error');
      setErrorMsg('Please enter a learner name.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const answers = generateFakeAnswers();
      await sendResults({ name }, answers);
      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err?.text || err?.message || 'Failed to send. Check console.');
    }
  };

  return (
    <div className="test-panel card">
      <div className="test-panel__header">
        <h2>🛠️ Developer Test Panel</h2>
        <p className="subtitle">Simulate and send mock learning style assessment results via EmailJS</p>
      </div>

      <div className="test-panel__body">
        {/* Name input */}
        <div className="form-group">
          <label htmlFor="learner-name">Mock Learner Name</label>
          <input
            id="learner-name"
            type="text"
            className="input-field"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. John Doe (Fake)"
          />
        </div>

        {/* Style Scores */}
        <h3 className="section-title">Configure Style Strengths (1 - 5)</h3>
        
        <div className="score-sliders">
          <div className="slider-group">
            <div className="slider-info">
              <span>👁️ Visual Score:</span>
              <span className="slider-val">{visual} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={visual}
              onChange={(e) => setVisual(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-info">
              <span>🔊 Auditory Score:</span>
              <span className="slider-val">{auditory} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={auditory}
              onChange={(e) => setAuditory(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-info">
              <span>📚 Reading/Writing Score:</span>
              <span className="slider-val">{reading} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={reading}
              onChange={(e) => setReading(Number(e.target.value))}
              className="slider"
            />
          </div>

          <div className="slider-group">
            <div className="slider-info">
              <span>🏃 Kinesthetic Score:</span>
              <span className="slider-val">{kinesthetic} / 5</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={kinesthetic}
              onChange={(e) => setKinesthetic(Number(e.target.value))}
              className="slider"
            />
          </div>
        </div>

        {/* Status display */}
        {status === 'sending' && (
          <div className="alert alert--info">
            <div className="spinner"></div>
            <span>Sending simulated results to EmailJS...</span>
          </div>
        )}

        {status === 'success' && (
          <div className="alert alert--success">
            <span>✨ Success! Fake results sent to mohamedelhawary8@gmail.com</span>
          </div>
        )}

        {status === 'error' && (
          <div className="alert alert--error">
            <span>❌ Error: {errorMsg}</span>
          </div>
        )}

        {/* Buttons */}
        <div className="test-panel__actions">
          <button
            onClick={handleSend}
            disabled={status === 'sending'}
            className="btn btn--primary"
          >
            🚀 Send Simulated Results
          </button>
          
          <button onClick={onBack} className="btn btn--secondary">
            ← Return to Main App
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestPanel;
