import { SurvivalPhrase } from './types';

export const survivalPhrases: SurvivalPhrase[] = [
  // Greetings & Essentials
  { id: 'surv-01', category: 'Essentials', chinese: '你好', pinyin: 'nǐ hǎo', english: 'Hello' },
  { id: 'surv-02', category: 'Essentials', chinese: '谢谢', pinyin: 'xiè xie', english: 'Thank you' },
  { id: 'surv-03', category: 'Essentials', chinese: '对不起', pinyin: 'duì bu qǐ', english: 'Sorry' },
  { id: 'surv-04', category: 'Essentials', chinese: '再见', pinyin: 'zài jiàn', english: 'Goodbye' },
  { id: 'surv-05', category: 'Essentials', chinese: '没关系', pinyin: 'méi guān xi', english: "It's okay / No problem" },
  { id: 'surv-06', category: 'Essentials', chinese: '我不懂', pinyin: 'wǒ bù dǒng', english: "I don't understand" },
  { id: 'surv-07', category: 'Essentials', chinese: '你会说英语吗？', pinyin: 'nǐ huì shuō yīng yǔ ma?', english: 'Do you speak English?' },
  
  // Directions & Travel
  { id: 'surv-08', category: 'Travel', chinese: '洗手间在哪儿？', pinyin: 'xǐ shǒu jiān zài nǎr?', english: 'Where is the bathroom?' },
  { id: 'surv-09', category: 'Travel', chinese: '我要去...', pinyin: 'wǒ yào qù...', english: 'I want to go to...' },
  { id: 'surv-10', category: 'Travel', chinese: '左拐', pinyin: 'zuǒ guǎi', english: 'Turn left' },
  { id: 'surv-11', category: 'Travel', chinese: '右拐', pinyin: 'yòu guǎi', english: 'Turn right' },
  { id: 'surv-12', category: 'Travel', chinese: '一直走', pinyin: 'yì zhí zǒu', english: 'Go straight' },
  
  // Shopping & Dining
  { id: 'surv-13', category: 'Shopping & Dining', chinese: '多少钱？', pinyin: 'duō shǎo qián?', english: 'How much is it?' },
  { id: 'surv-14', category: 'Shopping & Dining', chinese: '太贵了', pinyin: 'tài guì le', english: 'Too expensive' },
  { id: 'surv-15', category: 'Shopping & Dining', chinese: '服务员，买单', pinyin: 'fú wù yuán, mǎi dān', english: 'Waiter, the bill please' },
  { id: 'surv-16', category: 'Shopping & Dining', chinese: '这个', pinyin: 'zhè ge', english: 'This one' },
  { id: 'surv-17', category: 'Shopping & Dining', chinese: '不要辣', pinyin: 'bú yào là', english: 'No spicy' },
  
  // Emergency
  { id: 'surv-18', category: 'Emergency', chinese: '救命！', pinyin: 'jiù mìng!', english: 'Help!' },
  { id: 'surv-19', category: 'Emergency', chinese: '我迷路了', pinyin: 'wǒ mí lù le', english: "I'm lost" },
  { id: 'surv-20', category: 'Emergency', chinese: '请帮帮我', pinyin: 'qǐng bāng bang wǒ', english: 'Please help me' },
];

export function getSurvivalCategories(): string[] {
  const cats = new Set(survivalPhrases.map(p => p.category));
  return Array.from(cats);
}
