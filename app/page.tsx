import Link from 'next/link';
import { HSK_LEVELS } from '@/data';
import './home.css';

export default function Home() {
  const features = [
    { href: '/pinyin', emoji: '🗣️', title: 'Pinyin & Tones', desc: 'Master pronunciation fundamentals with interactive tones.', color: 'var(--accent-primary)' },
    { href: '/hsk', emoji: '📚', title: 'HSK Courses', desc: 'Structured curriculum from HSK 1 to HSK 4 with 1,200 words.', color: 'var(--accent-teal)' },
    { href: '/review', emoji: '🔄', title: 'Spaced Repetition', desc: 'Smart review system that shows hard words more often.', color: 'var(--accent-gradient)' },
    { href: '/situations', emoji: '🎭', title: 'Situations & Roleplay', desc: 'Interactive daily life dialogues and AI roleplay.', color: 'var(--accent-secondary)' },
    { href: '/learn', emoji: '🃏', title: 'AI Flashcards', desc: 'Deep pronunciation guides and context for every word.', color: 'var(--accent-secondary)' },
    { href: '/reading', emoji: '📖', title: 'Reading Practice', desc: 'Graded passages with toggleable pinyin and translation.', color: 'var(--success)' },
    { href: '/chat', emoji: '💬', title: 'AI Chat', desc: 'Practice conversation with an AI tutor who remembers you.', color: 'var(--accent-purple)' },
    { href: '/song', emoji: '🎵', title: 'Song Mode', desc: 'Learn Chinese through music with line-by-line pronunciation.', color: 'var(--warning)' },
  ];

  return (
    <div className="home-page animate-fade-in">
      {/* Hero */}
      <section className="hero">
        <h1 className="hero-title">
          Master Mandarin Through <br />
          <span className="text-gradient">Immersion</span>
        </h1>
        <p className="hero-subtitle">
          Free, open-source platform combining spaced repetition, contextual reading, and roleplay.
        </p>
        <div className="hero-cta">
          <Link href="/hsk/1" className="btn btn-primary">
            Start Learning Free →
          </Link>
          <Link href="/review" className="btn btn-secondary">
            Review Vocab
          </Link>
        </div>
      </section>

      {/* Daily Challenge Widget (Mondly inspired) */}
      <section className="daily-challenge max-w-container" style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'center' }}>
        <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', border: '2px solid rgba(250, 204, 21, 0.3)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎯</span> Daily 5-Minute Challenge
            </h3>
            <span style={{ fontWeight: 'bold', color: 'var(--warning)' }}>0 / 5 mins</span>
          </div>
          <div className="progress-bar" style={{ height: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
            <div className="progress-bar-fill" style={{ width: '10%', height: '100%', background: 'var(--warning)' }}></div>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0' }}>Consistency is key! Spend 5 minutes today to keep your streak alive.</p>
          <Link href="/hsk/1" className="btn btn-primary" style={{ background: 'var(--warning)', color: 'black', marginTop: '0.5rem', alignSelf: 'flex-start' }}>Complete Daily Goal</Link>
        </div>
      </section>

      {/* HSK Level Preview */}
      <section className="level-preview">
        <div className="level-preview-grid">
          {HSK_LEVELS.map((level, idx) => (
            <Link
              key={level.level}
              href={`/hsk/${level.level}`}
              className={`level-mini-card glass-panel animate-slide-up stagger-${idx + 1}`}
              style={{ '--level-color': level.color, opacity: 0 } as React.CSSProperties}
            >
              <div className="lmc-badge" style={{ background: level.color }}>HSK {level.level}</div>
              <div className="lmc-info">
                <span className="lmc-name">{level.subtitle}</span>
                <span className="lmc-count">{level.wordCount} words • {level.unitCount} units</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features grid */}
      <section className="features-section">
        <h2 className="features-heading">Everything You Need to <span className="text-gradient">Learn Chinese</span></h2>
        <div className="features-grid">
          {features.map((feat, idx) => (
            <Link
              key={feat.href}
              href={feat.href}
              className={`feature-card glass-panel animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
              style={{ opacity: 0 }}
            >
              <span className="feature-emoji">{feat.emoji}</span>
              <h3 style={{ color: feat.color }}>{feat.title}</h3>
              <p>{feat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bottom-cta glass-panel">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join thousands of learners mastering Chinese with our AI-powered platform.</p>
        <Link href="/hsk" className="btn btn-primary btn-lg">Begin Learning →</Link>
      </section>
    </div>
  );
}
