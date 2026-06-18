'use client';

import { useState } from 'react';
import Link from 'next/link';
import { survivalPhrases, getSurvivalCategories } from '@/data';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import './survival.css';

export default function SurvivalPage() {
  const categories = getSurvivalCategories();
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const playAudio = (text: string) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.85; // Slightly slower for beginners
    window.speechSynthesis.speak(utterance);
  };

  const filteredPhrases = survivalPhrases.filter(p => p.category === activeCategory);

  return (
    <div className="survival-page animate-fade-in">
      <div className="survival-header">
        <div className="title-row">
          <h1>Survival Chinese</h1>
          <span className="badge">Speak from Day 1</span>
        </div>
        <p>Essential, high-frequency phrases for travel and daily life. Click the play button to hear the pronunciation.</p>
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="phrase-grid">
        {filteredPhrases.map((phrase, idx) => (
          <div key={phrase.id} className={`phrase-card glass-panel animate-slide-up stagger-${Math.min(idx + 1, 6)}`}>
            <button 
              className="play-btn-huge" 
              onClick={() => playAudio(phrase.chinese)}
              title="Play Audio"
            >
              ▶
            </button>
            <div className="phrase-content">
              <div className="phrase-chinese chinese-text">{phrase.chinese}</div>
              <div className="phrase-pinyin">{phrase.pinyin}</div>
              <div className="phrase-phonetic pronunciation-guide">"{pinyinToPhonetic(phrase.pinyin)}"</div>
              <div className="phrase-english">{phrase.english}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
