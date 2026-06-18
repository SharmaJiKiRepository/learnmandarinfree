import Link from 'next/link';
import { thematicTopics } from '@/data/thematic';
import './topics.css';

export default function TopicsIndexPage() {
  return (
    <div className="topics-page animate-fade-in">
      <div className="topics-header">
        <h1>Thematic Lessons</h1>
        <p>Learn vocabulary based on real-world situations and topics, rather than strict proficiency levels.</p>
      </div>

      <div className="topics-grid">
        {thematicTopics.map((topic, idx) => (
          <Link 
            key={topic.id} 
            href={`/topics/${topic.id}`}
            className={`topic-card glass-panel animate-slide-up stagger-${Math.min(idx + 1, 6)}`}
          >
            <div className="topic-icon">{topic.icon}</div>
            <div className="topic-info">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
              <span className="word-count">{topic.words.length} words</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
