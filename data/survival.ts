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

  // Hotel
  { id: 'surv-21', category: 'Hotel', chinese: '我要办理入住', pinyin: 'wǒ yào bàn lǐ rù zhù', english: 'I want to check in' },
  { id: 'surv-22', category: 'Hotel', chinese: '房间钥匙', pinyin: 'fáng jiān yào shi', english: 'Room key' },
  { id: 'surv-23', category: 'Hotel', chinese: 'WiFi密码是什么？', pinyin: 'WiFi mì mǎ shì shén me?', english: 'What is the WiFi password?' },
  { id: 'surv-24', category: 'Hotel', chinese: '退房', pinyin: 'tuì fáng', english: 'Check out' },
  { id: 'surv-25', category: 'Hotel', chinese: '有热水吗？', pinyin: 'yǒu rè shuǐ ma?', english: 'Is there hot water?' },
  { id: 'surv-26', category: 'Hotel', chinese: '空调坏了', pinyin: 'kōng tiáo huài le', english: 'The air conditioning is broken' },

  // Medical
  { id: 'surv-27', category: 'Medical', chinese: '我头疼', pinyin: 'wǒ tóu téng', english: 'I have a headache' },
  { id: 'surv-28', category: 'Medical', chinese: '药店在哪里？', pinyin: 'yào diàn zài nǎ lǐ?', english: 'Where is the pharmacy?' },
  { id: 'surv-29', category: 'Medical', chinese: '我发烧了', pinyin: 'wǒ fā shāo le', english: 'I have a fever' },
  { id: 'surv-30', category: 'Medical', chinese: '请叫医生', pinyin: 'qǐng jiào yī shēng', english: 'Please call a doctor' },
  { id: 'surv-31', category: 'Medical', chinese: '我过敏', pinyin: 'wǒ guò mǐn', english: 'I have an allergy' },
  { id: 'surv-32', category: 'Medical', chinese: '肚子疼', pinyin: 'dù zi téng', english: 'Stomach ache' },

  // Tech & Daily
  { id: 'surv-33', category: 'Tech & Daily', chinese: '可以用微信支付吗？', pinyin: 'kě yǐ yòng wēi xìn zhī fù ma?', english: 'Can I pay with WeChat?' },
  { id: 'surv-34', category: 'Tech & Daily', chinese: '哪里可以充电？', pinyin: 'nǎ lǐ kě yǐ chōng diàn?', english: 'Where can I charge my phone?' },
  { id: 'surv-35', category: 'Tech & Daily', chinese: '扫这个二维码', pinyin: 'sǎo zhè ge èr wéi mǎ', english: 'Scan this QR code' },
  { id: 'surv-36', category: 'Tech & Daily', chinese: '没有信号', pinyin: 'méi yǒu xìn hào', english: 'No signal' },
  { id: 'surv-37', category: 'Tech & Daily', chinese: '下载这个APP', pinyin: 'xià zài zhè ge APP', english: 'Download this app' },

  // Social
  { id: 'surv-38', category: 'Social', chinese: '干杯！', pinyin: 'gān bēi!', english: 'Cheers!' },
  { id: 'surv-39', category: 'Social', chinese: '生日快乐', pinyin: 'shēng rì kuài lè', english: 'Happy birthday' },
  { id: 'surv-40', category: 'Social', chinese: '恭喜你', pinyin: 'gōng xǐ nǐ', english: 'Congratulations' },
  { id: 'surv-41', category: 'Social', chinese: '新年快乐', pinyin: 'xīn nián kuài lè', english: 'Happy New Year' },
  { id: 'surv-42', category: 'Social', chinese: '加个微信吧', pinyin: 'jiā ge wēi xìn ba', english: "Let's add each other on WeChat" },

  // Airport
  { id: 'surv-43', category: 'Airport', chinese: '请问登机口在哪？', pinyin: 'qǐng wèn dēng jī kǒu zài nǎ?', english: 'Where is the boarding gate?' },
  { id: 'surv-44', category: 'Airport', chinese: '我的行李丢了', pinyin: 'wǒ de xíng li diū le', english: 'My luggage is lost' },
  { id: 'surv-45', category: 'Airport', chinese: '航班延误了', pinyin: 'háng bān yán wù le', english: 'The flight is delayed' },
  { id: 'surv-46', category: 'Airport', chinese: '出口在哪里？', pinyin: 'chū kǒu zài nǎ lǐ?', english: 'Where is the exit?' },
  { id: 'surv-47', category: 'Airport', chinese: '海关', pinyin: 'hǎi guān', english: 'Customs' },

  // Bargaining
  { id: 'surv-48', category: 'Bargaining', chinese: '可以便宜一点吗？', pinyin: 'kě yǐ pián yi yī diǎn ma?', english: 'Can you make it cheaper?' },
  { id: 'surv-49', category: 'Bargaining', chinese: '打个折吧', pinyin: 'dǎ ge zhé ba', english: 'Give me a discount' },
  { id: 'surv-50', category: 'Bargaining', chinese: '太贵了，我不要了', pinyin: 'tài guì le, wǒ bù yào le', english: "Too expensive, I don't want it" },
  { id: 'surv-51', category: 'Bargaining', chinese: '最低多少钱？', pinyin: 'zuì dī duō shǎo qián?', english: 'What is the lowest price?' },
  { id: 'surv-52', category: 'Bargaining', chinese: '成交！', pinyin: 'chéng jiāo!', english: 'Deal!' },
];

export function getSurvivalCategories(): string[] {
  const cats = new Set(survivalPhrases.map(p => p.category));
  return Array.from(cats);
}
