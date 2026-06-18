'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';

const NAV_ITEMS = [
  { href: '/pinyin', label: 'Pinyin', emoji: '🗣️' },
  { href: '/hsk', label: 'HSK Courses', emoji: '📚' },
  { href: '/review', label: 'Review', emoji: '🔄' },
  { href: '/learn', label: 'Flashcards', emoji: '🃏' },
  { href: '/chat', label: 'Chat', emoji: '💬' },
  { href: '/reading', label: 'Reading', emoji: '📖' },
  { href: '/survival', label: 'Survival', emoji: '🧳' },
  { href: '/topics', label: 'Topics', emoji: '🎯' },
  { href: '/song', label: 'Song', emoji: '🎵' },
  { href: '/situations', label: 'Situations', emoji: '🗣️' },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="text-gradient">Learn</span>MandarinFree
        </Link>

        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${pathname?.startsWith(item.href) ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-emoji">{item.emoji}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="navbar-right-tools" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginLeft: 'auto', marginRight: '1rem' }}>
          <div className="streak-counter" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255, 107, 0, 0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-full)', color: '#ff6b00', fontWeight: 'bold' }}>
            <span style={{ fontSize: '1.2rem' }}>🔥</span> 3
          </div>
        </div>

        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`} />
        </button>
      </div>
    </header>
  );
}
