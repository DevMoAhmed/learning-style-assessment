import React from 'react';
import './ProgressBar.css';

interface Props {
  value: number; // 0–100
}

const ProgressBar: React.FC<Props> = ({ value }) => {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-bar" role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      <div className="progress-bar__fill" style={{ width: `${clamped}%` }} />
    </div>
  );
};

export default ProgressBar;
