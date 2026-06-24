'use client';

import { useState } from 'react';
import './essay.css';

interface Correction {
  original: string;
  better: string;
  reason: string;
}

interface GraderResponse {
  score: number;
  overall_feedback: string;
  corrections: Correction[];
}

export default function EssayGraderPage() {
  const [essayText, setEssayText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<GraderResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGrade = async () => {
    if (!essayText.trim()) return;
    
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch('/api/essay-grader', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ essay: essayText })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to grade essay');

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="essay-container animate-fade-in">
      <div className="essay-header">
        <h1>Dynamic <span className="text-gradient">Essay Grader</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Practice your Chinese writing. Paste a paragraph or short essay below, and our Nemotron AI will grade it, point out awkward phrasing, and suggest native alternatives.
        </p>
      </div>

      <div className="essay-layout">
        <div className="essay-input-section">
          <textarea
            className="essay-textarea"
            placeholder="Type your Chinese text here... (e.g., 今天天气很好，我和朋友一起去公园玩了。)"
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            disabled={isLoading}
          />
          <div className="essay-actions">
            <button 
              className="btn btn-primary" 
              onClick={handleGrade} 
              disabled={isLoading || essayText.trim().length < 5}
              style={{ minWidth: '150px' }}
            >
              {isLoading ? 'Grading...' : 'Grade My Essay'}
            </button>
          </div>
          {error && <p style={{ color: '#ef4444', marginTop: '1rem' }}>Error: {error}</p>}
        </div>

        {isLoading && (
          <div className="loading-state animate-fade-in">
            <div className="spinner"></div>
            <p>Nemotron is analyzing your grammar and sentence structure...</p>
          </div>
        )}

        {result && !isLoading && (
          <div className="essay-results animate-slide-up">
            <div className="score-display">
              <div className="score-circle" style={{ '--score': result.score } as React.CSSProperties}>
                <span className="score-number">{result.score}</span>
              </div>
              <div className="score-text">
                <h3>Final Score: {result.score}/100</h3>
                <p>Based on grammar accuracy, native phrasing, and vocabulary.</p>
              </div>
            </div>

            <div className="feedback-section">
              <h4>🎯 Overall Feedback</h4>
              <div className="overall-feedback">
                {result.overall_feedback}
              </div>
            </div>

            {result.corrections && result.corrections.length > 0 && (
              <div className="feedback-section">
                <h4>📝 Suggested Corrections</h4>
                {result.corrections.map((corr, idx) => (
                  <div key={idx} className="correction-item animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="correction-original">"{corr.original}"</div>
                    <div className="correction-better">→ "{corr.better}"</div>
                    <div className="correction-reason">{corr.reason}</div>
                  </div>
                ))}
              </div>
            )}
            
            {result.corrections && result.corrections.length === 0 && (
              <div className="feedback-section">
                <h4>✨ Perfect!</h4>
                <p style={{ color: 'var(--text-secondary)' }}>No major grammatical errors found in this text.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
