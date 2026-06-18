'use client';

import { useState } from 'react';
import './pinyin.css';

const TONES = [
  { id: 1, name: 'First Tone', mark: 'mā', description: 'High and level', icon: '—' },
  { id: 2, name: 'Second Tone', mark: 'má', description: 'Rising', icon: '/' },
  { id: 3, name: 'Third Tone', mark: 'mǎ', description: 'Falling then rising', icon: 'V' },
  { id: 4, name: 'Fourth Tone', mark: 'mà', description: 'Falling', icon: '\\' },
  { id: 5, name: 'Neutral Tone', mark: 'ma', description: 'Light and short', icon: '•' },
];

export default function PinyinPage() {
  const [activeTone, setActiveTone] = useState<number | null>(null);

  const playTone = (id: number) => {
    setActiveTone(id);
    // In a real app, this would play audio. For now, we mock the interaction.
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = 'zh-CN';
    utterance.text = TONES.find(t => t.id === id)?.mark || '';
    window.speechSynthesis.speak(utterance);
    
    setTimeout(() => setActiveTone(null), 1000);
  };

  return (
    <div className="pinyin-page animate-fade-in">
      <header className="pinyin-header text-center">
        <h1>Master <span className="text-gradient">Pinyin & Tones</span></h1>
        <p className="subtitle">The foundation of Mandarin pronunciation.</p>
      </header>

      <section className="glass-panel pinyin-section">
        <h2>Interactive Tone Practice</h2>
        <p>Mandarin is a tonal language. The same syllable can mean completely different things depending on the tone used. Click below to hear the differences.</p>
        
        <div className="tones-grid">
          {TONES.map(tone => (
            <button 
              key={tone.id} 
              className={`tone-card glass-panel ${activeTone === tone.id ? 'active' : ''}`}
              onClick={() => playTone(tone.id)}
            >
              <div className="tone-icon">{tone.icon}</div>
              <div className="tone-mark">{tone.mark}</div>
              <div className="tone-name">{tone.name}</div>
              <div className="tone-desc">{tone.description}</div>
              <div className="play-hint">🔊 Click to play</div>
            </button>
          ))}
        </div>
      </section>

      <section className="glass-panel pinyin-section">
        <h2>Initials & Finals</h2>
        <p>Every Mandarin syllable is made up of an initial consonant sound, and a final vowel sound.</p>
        <div className="pinyin-grid">
          <div className="pinyin-box">
            <h3>Initials (Consonants)</h3>
            <p className="pinyin-list">b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s, y, w</p>
          </div>
          <div className="pinyin-box">
            <h3>Finals (Vowels)</h3>
            <p className="pinyin-list">a, o, e, i, u, ü, ai, ei, ui, ao, ou, iu, ie, üe, er, an, en, in, un, ün, ang, eng, ing, ong</p>
          </div>
        </div>
      </section>
    </div>
  );
}
