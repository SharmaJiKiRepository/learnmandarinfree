'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './NavBar.css';

const PRIMARY_NAV = [
  { href: '/pinyin', label: 'Pinyin', emoji: '🗣️' },
  { href: '/hsk', label: 'HSK', emoji: '📚' },
  { href: '/tutor', label: 'AI Tutor', emoji: '🧠' },
  { href: '/review', label: 'Review', emoji: '🔄' },
  { href: '/learn', label: 'Flashcards', emoji: '🃏' },
];

const MORE_NAV = [
  { href: '/essay-grader', label: 'Essay Grader', emoji: '📝' },
  { href: '/reading', label: 'Reading', emoji: '📖' },
  { href: '/survival', label: 'Survival', emoji: '🧳' },
  { href: '/topics', label: 'Topics', emoji: '🎯' },
  { href: '/situations', label: 'Situations', emoji: '💬' },
  { href: '/immersion', label: 'Immersion', emoji: '🎬' },
  { href: '/song', label: 'Song Mode', emoji: '🎵' },
];

const ALL_NAV = [...PRIMARY_NAV, ...MORE_NAV];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close "More" dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setIsMoreOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isMoreActive = MORE_NAV.some(item => pathname?.startsWith(item.href));

  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="text-gradient">Learn</span>MandarinFree
        </Link>

        {/* Desktop nav */}
        <nav className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {/* On mobile: show all items. On desktop: show primary only */}
          {(isMenuOpen ? ALL_NAV : PRIMARY_NAV).map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-item ${pathname?.startsWith(item.href) ? 'active' : ''}`}
              onClick={() => { setIsMenuOpen(false); setIsMoreOpen(false); }}
            >
              <span className="nav-emoji">{item.emoji}</span>
              {item.label}
            </Link>
          ))}

          {/* "More" dropdown — desktop only */}
          {!isMenuOpen && (
            <div className="more-dropdown" ref={moreRef}>
              <button
                className={`nav-item more-trigger ${isMoreActive ? 'active' : ''}`}
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                <span className="nav-emoji">⚡</span>
                More
                <span className={`more-chevron ${isMoreOpen ? 'open' : ''}`}>▾</span>
              </button>
              {isMoreOpen && (
                <div className="more-menu animate-fade-in">
                  {MORE_NAV.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`more-item ${pathname?.startsWith(item.href) ? 'active' : ''}`}
                      onClick={() => setIsMoreOpen(false)}
                    >
                      <span className="nav-emoji">{item.emoji}</span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

        <div className="navbar-right-tools">
          <div className="streak-counter">
            <span className="streak-flame">🔥</span> 3
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
