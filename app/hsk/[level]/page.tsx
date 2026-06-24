import Link from 'next/link';
import { getUnitsByLevel, HSK_LEVELS, immersionVideos } from '@/data';
import { notFound } from 'next/navigation';
import './level.css';

interface Props {
  params: Promise<{ level: string }>;
}

export async function generateStaticParams() {
  return [{ level: '1' }, { level: '2' }, { level: '3' }, { level: '4' }, { level: '5' }, { level: '6' }];
}

export async function generateMetadata({ params }: Props) {
  const { level } = await params;
  return {
    title: `HSK ${level} Course | Learn Chinese`,
    description: `Browse all HSK ${level} units and start learning Chinese vocabulary, grammar, and more.`,
  };
}

export default async function LevelPage({ params }: Props) {
  const { level: levelStr } = await params;
  const level = parseInt(levelStr) as 1 | 2 | 3 | 4 | 5 | 6;
  if (![1, 2, 3, 4, 5, 6].includes(level)) notFound();

  const units = getUnitsByLevel(level);
  const levelMeta = HSK_LEVELS.find(l => l.level === level)!;
  const levelVideos = immersionVideos.filter(v => v.level === level);

  return (
    <div className="level-page animate-fade-in">
      <div className="level-header">
        <Link href="/hsk" className="back-link">← All Levels</Link>
        <div className="level-title-row">
          <span className="level-tag" style={{ background: levelMeta.color }}>
            HSK {level}
          </span>
          <h1>{levelMeta.name} — <span className="text-gradient">{levelMeta.subtitle}</span></h1>
        </div>
        <p className="level-desc">{levelMeta.description}</p>
        <div className="level-meta">
          <span>{levelMeta.wordCount} words</span>
          <span>•</span>
          <span>{levelMeta.unitCount} units</span>
        </div>
      </div>

      <div className="course-extras" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Link href={`/grammar?level=${level}`} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>📐</span>
          <strong>HSK {level} Grammar Wiki</strong>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>Master sentence structures</p>
        </Link>
        <Link href={`/situations?level=${level}`} className="btn btn-secondary" style={{ flex: 1, textAlign: 'center', padding: '1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>
          <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>💬</span>
          <strong>Daily Life Situations</strong>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>Practice real conversations</p>
        </Link>
      </div>

      {levelVideos.length > 0 && (
        <div className="level-videos-section" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', margin: 0 }}>🎬 Video Immersion</h2>
            <Link href="/immersion" style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', textDecoration: 'none' }}>View All →</Link>
          </div>
          <div className="video-scroll-container" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem', scrollSnapType: 'x mandatory' }}>
            {levelVideos.map((video, idx) => (
              <Link 
                key={video.id} 
                href={`/immersion/${video.id}`} 
                className={`video-card animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
                style={{ minWidth: '300px', flex: '0 0 auto', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', scrollSnapAlign: 'start', opacity: 0 } as React.CSSProperties}
              >
                <div className="video-thumbnail" style={{ position: 'relative', width: '100%', paddingTop: '56.25%', backgroundColor: '#111' }}>
                  <img src={video.thumbnailUrl} alt={video.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="play-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', opacity: 0, transition: 'opacity 0.2s' }}>
                    <span className="play-icon" style={{ fontSize: '3rem', color: 'white', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }}>▶</span>
                  </div>
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.1rem', color: 'var(--text-primary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-tertiary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{video.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="units-grid">
        {units.map((unit, idx) => (
          <Link
            key={unit.unit}
            href={`/hsk/${level}/${unit.unit}`}
            className={`unit-card glass-panel animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
            style={{ '--level-color': levelMeta.color, opacity: 0 } as React.CSSProperties}
          >
            <div className="unit-number" style={{ color: levelMeta.color }}>
              Unit {unit.unit}
            </div>
            <h3 className="unit-name">{unit.name}</h3>
            <p className="unit-word-count">{unit.words.length} words</p>
            <div className="unit-preview">
              {unit.words.slice(0, 5).map(w => (
                <span key={w.id} className="preview-char chinese-text">{w.chinese}</span>
              ))}
              {unit.words.length > 5 && <span className="preview-more">+{unit.words.length - 5}</span>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
