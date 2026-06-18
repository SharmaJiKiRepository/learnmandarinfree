'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import { getTopicById } from '@/data/thematic';
import { pinyinToPhonetic } from '@/lib/pinyin-to-phonetic';
import { notFound } from 'next/navigation';
import '../topics.css';

interface Props {
  params: Promise<{ topic: string }>;
}

export default function TopicDetailPage({ params }: Props) {
  const { topic: topicId } = use(params);
  const topic = getTopicById(topicId);
  const [expandedWord, setExpandedWord] = useState<string | null>(null);

  if (!topic) return notFound();

  const playAudio = (e: React.MouseEvent, text: string) => {
    e.stopPropagation();
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="topics-page animate-fade-in">
      <div className="topics-header">
        <Link href="/topics" className="back-link">← All Topics</Link>
        <h1><span className="topic-icon-inline">{topic.icon}</span> {topic.title}</h1>
        <p>{topic.description}</p>
      </div>

      <div className="vocab-list">
        {topic.words.map((word) => (
          <div key={word.id} className={`vocab-item glass-panel ${expandedWord === word.id ? 'expanded' : ''}`}>
            <button
              className="vocab-row"
              onClick={() => setExpandedWord(expandedWord === word.id ? null : word.id)}
            >
              <span className="vocab-chinese chinese-text">
                {word.chinese}
                <button onClick={(e) => playAudio(e, word.chinese)} className="play-audio-btn" title="Listen">🔊</button>
              </span>
              <span className="vocab-pinyin">{word.pinyin}</span>
              <span className="vocab-pronunciation pronunciation-guide">
                "{pinyinToPhonetic(word.pinyin)}"
              </span>
              <span className="vocab-meaning">{word.meaning}</span>
              <span className="vocab-pos">{word.partOfSpeech}</span>
              <span className="vocab-expand">{expandedWord === word.id ? '−' : '+'}</span>
            </button>

            {expandedWord === word.id && (
              <div className="vocab-expanded animate-slide-down" style={{ padding: '1.5rem' }}>
                <p>This word is originally from <strong>HSK Level {word.hskLevel}</strong>.</p>
                {word.exampleSentence && (
                  <div className="example-sentence" style={{ marginTop: '1rem' }}>
                    <div className="example-label">Example</div>
                    <div className="example-chinese chinese-text">
                      {word.exampleSentence.chinese}
                      <button onClick={(e) => playAudio(e, word.exampleSentence!.chinese)} className="play-audio-btn" title="Listen">🔊</button>
                    </div>
                    <div className="example-pinyin">{word.exampleSentence.pinyin}</div>
                    <div className="example-meaning">{word.exampleSentence.meaning}</div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
