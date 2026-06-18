import { ThematicTopic } from './types';
import { getWordsByLevel } from './index';

// Extract words dynamically from existing HSK vocab to form thematic lists
const allWords = [
  ...getWordsByLevel(1),
  ...getWordsByLevel(2),
  ...getWordsByLevel(3),
];

function findWords(chineseWords: string[]) {
  return chineseWords.map(c => allWords.find(w => w.chinese === c)).filter(Boolean) as typeof allWords;
}

export const thematicTopics: ThematicTopic[] = [
  {
    id: 'greetings',
    title: 'Greetings & Basics',
    icon: '👋',
    description: 'Essential words for saying hello, goodbye, and introducing yourself.',
    words: findWords(['你好', '再见', '谢谢', '不客气', '对不起', '没关系', '叫', '名字', '高兴', '认识'])
  },
  {
    id: 'family',
    title: 'Family Members',
    icon: '👨‍👩‍👧‍👦',
    description: 'Learn how to address family members in Chinese.',
    words: findWords(['爸爸', '妈妈', '哥哥', '姐姐', '弟弟', '妹妹', '儿子', '女儿', '丈夫', '妻子', '家'])
  },
  {
    id: 'numbers',
    title: 'Numbers & Time',
    icon: '🔢',
    description: 'Counting from 1-10 and basic time concepts.',
    words: findWords(['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '百', '千', '点', '分', '钟', '小时', '时间', '现在', '今天', '明天', '昨天'])
  },
  {
    id: 'food',
    title: 'Food & Drink',
    icon: '🍜',
    description: 'Words related to eating, drinking, and ordering food.',
    words: findWords(['吃', '喝', '水', '茶', '咖啡', '米饭', '面条', '苹果', '西瓜', '菜', '饭馆', '服务员', '好喝', '好吃'])
  },
  {
    id: 'transport',
    title: 'Transport & Places',
    icon: '✈️',
    description: 'Navigating the city and traveling around.',
    words: findWords(['去', '来', '回', '出租车', '飞机', '火车站', '学校', '医院', '商店', '饭店', '机场', '路', '远', '近', '左边', '右边', '旁边'])
  }
];

export function getTopicById(id: string): ThematicTopic | undefined {
  return thematicTopics.find(t => t.id === id);
}
