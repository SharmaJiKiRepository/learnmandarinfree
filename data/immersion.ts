import { ImmersionVideo } from './types';

export const immersionVideos: ImmersionVideo[] = [
  // --- HSK 1 ---
  {
    id: 'peppa-pig-intro',
    youtubeId: 'RT1yYLfqNhU', 
    title: 'Peppa Pig: Introduction',
    description: 'Learn family vocabulary and simple sentence structures by watching Peppa Pig introduce her family!',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/RT1yYLfqNhU/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 2, chinese: '我是粉红猪小妹。', pinyin: 'Wǒ shì Fěnhóng Zhū Xiǎomèi.', english: 'I am Peppa Pig.', words: [{ chinese: '我', pinyin: 'wǒ', meaning: 'I/me', hskLevel: 1 }, { chinese: '是', pinyin: 'shì', meaning: 'am/is/are', hskLevel: 1 }] },
      { startTime: 2, endTime: 4.5, chinese: '这是我的弟弟乔治。', pinyin: 'Zhè shì wǒ de dìdi Qiáozhì.', english: 'This is my little brother George.', words: [{ chinese: '这', pinyin: 'zhè', meaning: 'this', hskLevel: 1 }, { chinese: '弟弟', pinyin: 'dìdi', meaning: 'little brother', hskLevel: 2 }] },
      { startTime: 4.5, endTime: 6.5, chinese: '这是妈妈猪。', pinyin: 'Zhè shì māma zhū.', english: 'This is Mummy Pig.', words: [{ chinese: '妈妈', pinyin: 'māma', meaning: 'mother', hskLevel: 1 }] },
      { startTime: 6.5, endTime: 11, chinese: '这是爸爸猪。', pinyin: 'Zhè shì bàba zhū.', english: 'This is Daddy Pig.', words: [{ chinese: '爸爸', pinyin: 'bàba', meaning: 'father', hskLevel: 1 }] },
      { startTime: 12.5, endTime: 14.5, chinese: '泥坑。', pinyin: 'Ní kēng.', english: 'Muddy Puddles.', words: [{ chinese: '泥', pinyin: 'ní', meaning: 'mud', hskLevel: 4 }, { chinese: '坑', pinyin: 'kēng', meaning: 'puddle/hole', hskLevel: 5 }] },
      { startTime: 15, endTime: 18, chinese: '今天下雨了。', pinyin: 'Jīntiān xià yǔ le.', english: 'It is raining today.', words: [{ chinese: '今天', pinyin: 'jīntiān', meaning: 'today', hskLevel: 1 }, { chinese: '下雨', pinyin: 'xià yǔ', meaning: 'to rain', hskLevel: 1 }] },
      { startTime: 18.5, endTime: 22, chinese: '佩奇和乔治不能出去玩。', pinyin: 'Pèiqí hé Qiáozhì bù néng chūqù wán.', english: 'Peppa and George cannot go out to play.', words: [{ chinese: '不能', pinyin: 'bù néng', meaning: 'cannot', hskLevel: 1 }, { chinese: '出去', pinyin: 'chūqù', meaning: 'go out', hskLevel: 1 }, { chinese: '玩', pinyin: 'wán', meaning: 'play', hskLevel: 1 }] }
    ]
  },
  {
    id: 'basic-greetings',
    youtubeId: '4yvTsnB9vjE',
    title: 'Basic Greetings in China',
    description: 'Listen to native speakers saying hello and introducing themselves on the streets of Beijing.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/4yvTsnB9vjE/hqdefault.jpg',
    transcript: [
      { startTime: 1, endTime: 4, chinese: '你好！', pinyin: 'Nǐ hǎo!', english: 'Hello!', words: [{ chinese: '你好', pinyin: 'nǐ hǎo', meaning: 'hello', hskLevel: 1 }] },
      { startTime: 5, endTime: 9, chinese: '你叫什么名字？', pinyin: 'Nǐ jiào shénme míngzi?', english: 'What is your name?', words: [{ chinese: '叫', pinyin: 'jiào', meaning: 'to be called', hskLevel: 1 }, { chinese: '什么', pinyin: 'shénme', meaning: 'what', hskLevel: 1 }, { chinese: '名字', pinyin: 'míngzi', meaning: 'name', hskLevel: 1 }] },
      { startTime: 10, endTime: 14, chinese: '我叫李雷。', pinyin: 'Wǒ jiào Lǐ Léi.', english: 'My name is Li Lei.', words: [{ chinese: '我', pinyin: 'wǒ', meaning: 'I/me', hskLevel: 1 }] },
      { startTime: 15, endTime: 19, chinese: '认识你很高兴。', pinyin: 'Rènshi nǐ hěn gāoxìng.', english: 'Nice to meet you.', words: [{ chinese: '认识', pinyin: 'rènshi', meaning: 'to know/recognize', hskLevel: 1 }, { chinese: '高兴', pinyin: 'gāoxìng', meaning: 'happy', hskLevel: 1 }] },
      { startTime: 20, endTime: 24, chinese: '你也是北京人吗？', pinyin: 'Nǐ yě shì Běijīng rén ma?', english: 'Are you also from Beijing?', words: [{ chinese: '也', pinyin: 'yě', meaning: 'also', hskLevel: 1 }, { chinese: '人', pinyin: 'rén', meaning: 'person', hskLevel: 1 }] },
      { startTime: 25, endTime: 29, chinese: '不，我是上海人。', pinyin: 'Bù, wǒ shì Shànghǎi rén.', english: 'No, I am from Shanghai.', words: [{ chinese: '不', pinyin: 'bù', meaning: 'no/not', hskLevel: 1 }] },
      { startTime: 30, endTime: 35, chinese: '你住在哪儿？', pinyin: 'Nǐ zhù zài nǎr?', english: 'Where do you live?', words: [{ chinese: '住', pinyin: 'zhù', meaning: 'live', hskLevel: 1 }, { chinese: '哪儿', pinyin: 'nǎr', meaning: 'where', hskLevel: 1 }] },
      { startTime: 36, endTime: 40, chinese: '我住在这里。', pinyin: 'Wǒ zhù zài zhèlǐ.', english: 'I live here.', words: [{ chinese: '这里', pinyin: 'zhèlǐ', meaning: 'here', hskLevel: 1 }] }
    ]
  },
  {
    id: 'chinese-numbers',
    youtubeId: 'aSP6ZDckdV0',
    title: 'Chinese Numbers 1 to 10',
    description: 'Learn how to count from one to ten in Chinese with this simple and catchy video.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/aSP6ZDckdV0/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '一起来数数吧！', pinyin: 'Yì qǐ lái shǔ shǔ ba!', english: 'Let us count together!', words: [{ chinese: '一起', pinyin: 'yìqǐ', meaning: 'together', hskLevel: 2 }] },
      { startTime: 5, endTime: 8, chinese: '一，二，三', pinyin: 'Yī, èr, sān', english: 'One, two, three', words: [{ chinese: '一', pinyin: 'yī', meaning: 'one', hskLevel: 1 }, { chinese: '二', pinyin: 'èr', meaning: 'two', hskLevel: 1 }, { chinese: '三', pinyin: 'sān', meaning: 'three', hskLevel: 1 }] },
      { startTime: 9, endTime: 12, chinese: '四，五，六', pinyin: 'Sì, wǔ, liù', english: 'Four, five, six', words: [{ chinese: '四', pinyin: 'sì', meaning: 'four', hskLevel: 1 }, { chinese: '五', pinyin: 'wǔ', meaning: 'five', hskLevel: 1 }, { chinese: '六', pinyin: 'liù', meaning: 'six', hskLevel: 1 }] },
      { startTime: 13, endTime: 16, chinese: '七，八，九', pinyin: 'Qī, bā, jiǔ', english: 'Seven, eight, nine', words: [{ chinese: '七', pinyin: 'qī', meaning: 'seven', hskLevel: 1 }, { chinese: '八', pinyin: 'bā', meaning: 'eight', hskLevel: 1 }, { chinese: '九', pinyin: 'jiǔ', meaning: 'nine', hskLevel: 1 }] },
      { startTime: 17, endTime: 20, chinese: '十！', pinyin: 'Shí!', english: 'Ten!', words: [{ chinese: '十', pinyin: 'shí', meaning: 'ten', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '你学会了吗？', pinyin: 'Nǐ xué huì le ma?', english: 'Did you learn it?', words: [{ chinese: '学', pinyin: 'xué', meaning: 'learn', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '再来一次！', pinyin: 'Zài lái yí cì!', english: 'One more time!', words: [{ chinese: '再', pinyin: 'zài', meaning: 'again', hskLevel: 2 }] }
    ]
  },
  {
    id: 'family-members',
    youtubeId: 'wftG_-vZnHk',
    title: 'Family Members in Chinese',
    description: 'Learn the essential vocabulary for family members in Mandarin.',
    level: 1,
    thumbnailUrl: 'https://img.youtube.com/vi/wftG_-vZnHk/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '我的家', pinyin: 'Wǒ de jiā', english: 'My family', words: [{ chinese: '家', pinyin: 'jiā', meaning: 'family/home', hskLevel: 1 }] },
      { startTime: 5, endTime: 8, chinese: '我家有四口人。', pinyin: 'Wǒ jiā yǒu sì kǒu rén.', english: 'There are four people in my family.', words: [{ chinese: '有', pinyin: 'yǒu', meaning: 'have', hskLevel: 1 }] },
      { startTime: 9, endTime: 12, chinese: '爸爸，妈妈', pinyin: 'Bàba, māma', english: 'Dad, mom', words: [{ chinese: '爸爸', pinyin: 'bàba', meaning: 'father', hskLevel: 1 }, { chinese: '妈妈', pinyin: 'māma', meaning: 'mother', hskLevel: 1 }] },
      { startTime: 13, endTime: 16, chinese: '哥哥和我。', pinyin: 'Gēge hé wǒ.', english: 'Older brother and me.', words: [{ chinese: '哥哥', pinyin: 'gēge', meaning: 'older brother', hskLevel: 2 }, { chinese: '和', pinyin: 'hé', meaning: 'and', hskLevel: 1 }] },
      { startTime: 17, endTime: 20, chinese: '我爱我的家。', pinyin: 'Wǒ ài wǒ de jiā.', english: 'I love my family.', words: [{ chinese: '爱', pinyin: 'ài', meaning: 'love', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '你家有几口人？', pinyin: 'Nǐ jiā yǒu jǐ kǒu rén?', english: 'How many people are in your family?', words: [{ chinese: '几', pinyin: 'jǐ', meaning: 'how many', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '他们是谁？', pinyin: 'Tāmen shì shéi?', english: 'Who are they?', words: [{ chinese: '谁', pinyin: 'shéi', meaning: 'who', hskLevel: 1 }] }
    ]
  },

  // --- HSK 2 ---
  {
    id: 'ordering-boba',
    youtubeId: 'aTiOxfqIaB8', 
    title: 'Ordering Bubble Tea in China',
    description: 'A vlog showing a real-life interaction of ordering Boba at a local Chinese shop. Great for listening practice.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/aTiOxfqIaB8/hqdefault.jpg',
    transcript: [
      { startTime: 2, endTime: 5, chinese: '你好！你想喝什么？', pinyin: 'Nǐ hǎo! Nǐ xiǎng hē shénme?', english: 'Hello! What would you like to drink?', words: [{ chinese: '想', pinyin: 'xiǎng', meaning: 'want to', hskLevel: 1 }, { chinese: '喝', pinyin: 'hē', meaning: 'drink', hskLevel: 1 }] },
      { startTime: 6, endTime: 10, chinese: '我要一杯珍珠奶茶。', pinyin: 'Wǒ yào yì bēi zhēnzhū nǎichá.', english: 'I want a bubble tea.', words: [{ chinese: '杯', pinyin: 'bēi', meaning: 'cup', hskLevel: 1 }] },
      { startTime: 11, endTime: 15, chinese: '半糖，少冰。', pinyin: 'Bàn táng, shǎo bīng.', english: 'Half sugar, less ice.', words: [{ chinese: '少', pinyin: 'shǎo', meaning: 'less', hskLevel: 1 }] },
      { startTime: 16, endTime: 20, chinese: '好的，一共十五块。', pinyin: 'Hǎo de, yígòng shíwǔ kuài.', english: 'Okay, total is fifteen kuai.', words: [{ chinese: '一共', pinyin: 'yígòng', meaning: 'altogether', hskLevel: 2 }, { chinese: '块', pinyin: 'kuài', meaning: 'yuan (colloquial)', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '给你钱。', pinyin: 'Gěi nǐ qián.', english: 'Here is the money.', words: [{ chinese: '给', pinyin: 'gěi', meaning: 'give', hskLevel: 2 }, { chinese: '钱', pinyin: 'qián', meaning: 'money', hskLevel: 1 }] },
      { startTime: 26, endTime: 30, chinese: '谢谢，请等一下。', pinyin: 'Xièxie, qǐng děng yíxià.', english: 'Thank you, please wait a moment.', words: [{ chinese: '请', pinyin: 'qǐng', meaning: 'please', hskLevel: 1 }, { chinese: '等', pinyin: 'děng', meaning: 'wait', hskLevel: 2 }] }
    ]
  },
  {
    id: 'taking-a-taxi',
    youtubeId: 'L2v1PKUqUJc', 
    title: 'Taking a Taxi to the Airport',
    description: 'Learn practical phrases for giving directions and talking to taxi drivers in Chinese.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/L2v1PKUqUJc/hqdefault.jpg',
    transcript: [
      { startTime: 1, endTime: 4, chinese: '师傅，去机场。', pinyin: 'Shīfu, qù jīchǎng.', english: 'Driver, to the airport.', words: [{ chinese: '师傅', pinyin: 'shīfu', meaning: 'master/driver (polite)', hskLevel: 3 }, { chinese: '去', pinyin: 'qù', meaning: 'go', hskLevel: 1 }, { chinese: '机场', pinyin: 'jīchǎng', meaning: 'airport', hskLevel: 2 }] },
      { startTime: 5, endTime: 8, chinese: '好的。你几点的飞机？', pinyin: 'Hǎo de. Nǐ jǐ diǎn de fēijī?', english: 'Okay. What time is your flight?', words: [{ chinese: '几点', pinyin: 'jǐ diǎn', meaning: 'what time', hskLevel: 1 }, { chinese: '飞机', pinyin: 'fēijī', meaning: 'airplane', hskLevel: 1 }] },
      { startTime: 9, endTime: 13, chinese: '下午两点的飞机。', pinyin: 'Xiàwǔ liǎng diǎn de fēijī.', english: '2 PM flight.', words: [{ chinese: '下午', pinyin: 'xiàwǔ', meaning: 'afternoon', hskLevel: 1 }, { chinese: '两', pinyin: 'liǎng', meaning: 'two', hskLevel: 1 }] },
      { startTime: 14, endTime: 18, chinese: '现在有点堵车。', pinyin: 'Xiànzài yǒudiǎn dǔchē.', english: 'There is a little traffic jam now.', words: [{ chinese: '现在', pinyin: 'xiànzài', meaning: 'now', hskLevel: 1 }] },
      { startTime: 19, endTime: 23, chinese: '没关系，我不着急。', pinyin: 'Méi guānxi, wǒ bù zháojí.', english: 'It does not matter, I am not in a hurry.', words: [{ chinese: '没关系', pinyin: 'méi guānxi', meaning: 'no problem', hskLevel: 1 }] }
    ]
  },

  // --- HSK 3 ---
  {
    id: 'renting-apartment',
    youtubeId: 'Y2bezj9kI-o', 
    title: 'Renting an Apartment in Shanghai',
    description: 'Advanced listening practice discussing rent, utilities, and location with a real estate agent.',
    level: 3,
    thumbnailUrl: 'https://img.youtube.com/vi/Y2bezj9kI-o/hqdefault.jpg',
    transcript: [
      { startTime: 5, endTime: 8, chinese: '这个房子的租金是一个月五千块。', pinyin: 'Zhège fángzi de zūjīn shì yī gè yuè wǔqiān kuài.', english: 'The rent for this house is 5000 yuan a month.', words: [{ chinese: '房子', pinyin: 'fángzi', meaning: 'house/apartment', hskLevel: 3 }] },
      { startTime: 9, endTime: 12, chinese: '附近有地铁站吗？', pinyin: 'Fùjìn yǒu dìtiě zhàn ma?', english: 'Is there a subway station nearby?', words: [{ chinese: '附近', pinyin: 'fùjìn', meaning: 'nearby', hskLevel: 3 }, { chinese: '地铁', pinyin: 'dìtiě', meaning: 'subway', hskLevel: 3 }, { chinese: '站', pinyin: 'zhàn', meaning: 'station', hskLevel: 3 }] },
      { startTime: 13, endTime: 17, chinese: '有，走五分钟就到了。', pinyin: 'Yǒu, zǒu wǔ fēnzhōng jiù dào le.', english: 'Yes, it takes five minutes to walk there.', words: [{ chinese: '走', pinyin: 'zǒu', meaning: 'walk', hskLevel: 2 }, { chinese: '分钟', pinyin: 'fēnzhōng', meaning: 'minute', hskLevel: 1 }] },
      { startTime: 18, endTime: 22, chinese: '水电费怎么算？', pinyin: 'Shuǐdiànfèi zěnme suàn?', english: 'How are the water and electricity bills calculated?', words: [{ chinese: '怎么', pinyin: 'zěnme', meaning: 'how', hskLevel: 1 }] },
      { startTime: 23, endTime: 28, chinese: '每个月自己交。', pinyin: 'Měi gè yuè zìjǐ jiāo.', english: 'You pay them yourself every month.', words: [{ chinese: '月', pinyin: 'yuè', meaning: 'month', hskLevel: 1 }, { chinese: '自己', pinyin: 'zìjǐ', meaning: 'oneself', hskLevel: 3 }] }
    ]
  },

  // --- HSK 4 ---
  {
    id: 'job-interview',
    youtubeId: 'kvG7QF89Ddo', 
    title: 'A Corporate Job Interview',
    description: 'Listen to a formal job interview in Chinese. Focus on professional vocabulary and formal sentence structures.',
    level: 4,
    thumbnailUrl: 'https://img.youtube.com/vi/kvG7QF89Ddo/hqdefault.jpg',
    transcript: [
      { startTime: 10, endTime: 14, chinese: '请你简单地介绍一下自己的工作经验。', pinyin: 'Qǐng nǐ jiǎndān de jièshào yīxià zìjǐ de gōngzuò jīngyàn.', english: 'Please briefly introduce your work experience.', words: [{ chinese: '简单', pinyin: 'jiǎndān', meaning: 'simple/brief', hskLevel: 3 }, { chinese: '介绍', pinyin: 'jièshào', meaning: 'introduce', hskLevel: 2 }, { chinese: '经验', pinyin: 'jīngyàn', meaning: 'experience', hskLevel: 4 }] },
      { startTime: 15, endTime: 20, chinese: '我曾在一家科技公司担任项目经理。', pinyin: 'Wǒ céng zài yī jiā kējì gōngsī dānrèn xiàngmù jīnglǐ.', english: 'I previously worked at a tech company as a project manager.', words: [{ chinese: '科技', pinyin: 'kējì', meaning: 'science and technology', hskLevel: 4 }, { chinese: '公司', pinyin: 'gōngsī', meaning: 'company', hskLevel: 2 }] },
      { startTime: 21, endTime: 26, chinese: '主要负责市场研究和团队管理。', pinyin: 'Zhǔyào fùzé shìchǎng yánjiū hé tuánduì guǎnlǐ.', english: 'Mainly responsible for market research and team management.', words: [{ chinese: '主要', pinyin: 'zhǔyào', meaning: 'main/principal', hskLevel: 3 }, { chinese: '负责', pinyin: 'fùzé', meaning: 'to be responsible for', hskLevel: 4 }, { chinese: '市场', pinyin: 'shìchǎng', meaning: 'market', hskLevel: 4 }] },
      { startTime: 27, endTime: 32, chinese: '为什么想来我们公司工作？', pinyin: 'Wèishénme xiǎng lái wǒmen gōngsī gōngzuò?', english: 'Why do you want to come work at our company?', words: [{ chinese: '为什么', pinyin: 'wèishénme', meaning: 'why', hskLevel: 1 }, { chinese: '工作', pinyin: 'gōngzuò', meaning: 'job/work', hskLevel: 1 }] }
    ]
  },

  // --- NEW HSK 2 Videos ---
  {
    id: 'at-the-doctor',
    youtubeId: '2UrL1MnEbSs',
    title: 'At the Doctor\'s Office',
    description: 'Learn medical vocabulary and how to describe symptoms to a Chinese doctor.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/2UrL1MnEbSs/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '你好，请问你哪里不舒服？', pinyin: 'Nǐ hǎo, qǐng wèn nǐ nǎ lǐ bù shū fu?', english: 'Hello, where do you feel unwell?', words: [{ chinese: '舒服', pinyin: 'shūfu', meaning: 'comfortable', hskLevel: 2 }] },
      { startTime: 5, endTime: 9, chinese: '我头疼，还有点发烧。', pinyin: 'Wǒ tóu téng, hái yǒu diǎn fā shāo.', english: 'I have a headache and a slight fever.', words: [{ chinese: '头', pinyin: 'tóu', meaning: 'head', hskLevel: 2 }, { chinese: '发烧', pinyin: 'fā shāo', meaning: 'to have a fever', hskLevel: 2 }] },
      { startTime: 10, endTime: 14, chinese: '从什么时候开始的？', pinyin: 'Cóng shénme shíhou kāishǐ de?', english: 'When did it start?', words: [{ chinese: '开始', pinyin: 'kāishǐ', meaning: 'to start', hskLevel: 2 }] },
      { startTime: 15, endTime: 19, chinese: '昨天晚上开始的。', pinyin: 'Zuótiān wǎnshang kāishǐ de.', english: 'It started last night.', words: [{ chinese: '昨天', pinyin: 'zuótiān', meaning: 'yesterday', hskLevel: 1 }] },
      { startTime: 20, endTime: 25, chinese: '我给你开点药，多喝水，多休息。', pinyin: 'Wǒ gěi nǐ kāi diǎn yào, duō hē shuǐ, duō xiūxi.', english: 'I will prescribe some medicine. Drink more water and rest more.', words: [{ chinese: '药', pinyin: 'yào', meaning: 'medicine', hskLevel: 2 }, { chinese: '休息', pinyin: 'xiūxi', meaning: 'rest', hskLevel: 2 }] },
      { startTime: 26, endTime: 30, chinese: '谢谢医生。', pinyin: 'Xièxie yīshēng.', english: 'Thank you, doctor.', words: [{ chinese: '医生', pinyin: 'yīshēng', meaning: 'doctor', hskLevel: 1 }] }
    ]
  },
  {
    id: 'booking-hotel',
    youtubeId: 'JxS5E-kZc2s',
    title: 'Booking a Hotel Room',
    description: 'Practice hotel check-in vocabulary and learn how to ask about room amenities.',
    level: 2,
    thumbnailUrl: 'https://img.youtube.com/vi/JxS5E-kZc2s/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 4, chinese: '你好，我要订一个房间。', pinyin: 'Nǐ hǎo, wǒ yào dìng yī gè fángjiān.', english: 'Hello, I want to book a room.', words: [{ chinese: '订', pinyin: 'dìng', meaning: 'to book/reserve', hskLevel: 2 }] },
      { startTime: 5, endTime: 9, chinese: '你要住几天？', pinyin: 'Nǐ yào zhù jǐ tiān?', english: 'How many days will you stay?', words: [{ chinese: '住', pinyin: 'zhù', meaning: 'to live/stay', hskLevel: 1 }] },
      { startTime: 10, endTime: 14, chinese: '三天。有没有便宜一点的房间？', pinyin: 'Sān tiān. Yǒu méi yǒu piányi yīdiǎn de fángjiān?', english: 'Three days. Do you have a cheaper room?', words: [{ chinese: '便宜', pinyin: 'piányi', meaning: 'cheap', hskLevel: 2 }] },
      { startTime: 15, endTime: 20, chinese: '有，标准间每晚三百块。', pinyin: 'Yǒu, biāozhǔn jiān měi wǎn sānbǎi kuài.', english: 'Yes, a standard room is 300 yuan per night.', words: [{ chinese: '每', pinyin: 'měi', meaning: 'every', hskLevel: 1 }] },
      { startTime: 21, endTime: 25, chinese: '好的，包括早餐吗？', pinyin: 'Hǎo de, bāokuò zǎocān ma?', english: 'Okay, does it include breakfast?', words: [{ chinese: '早餐', pinyin: 'zǎocān', meaning: 'breakfast', hskLevel: 2 }] },
      { startTime: 26, endTime: 30, chinese: '包括的，请出示您的护照。', pinyin: 'Bāokuò de, qǐng chūshì nín de hùzhào.', english: 'Yes it does. Please show your passport.', words: [{ chinese: '护照', pinyin: 'hùzhào', meaning: 'passport', hskLevel: 2 }] }
    ]
  },

  // --- NEW HSK 3 Videos ---
  {
    id: 'chinese-cooking',
    youtubeId: 'ZpDYczMaSgw',
    title: 'Chinese Home Cooking: Tomato Egg Stir-fry',
    description: 'Follow along as a native speaker teaches you how to make the classic Chinese dish — 西红柿炒鸡蛋 (Scrambled Eggs with Tomatoes).',
    level: 3,
    thumbnailUrl: 'https://img.youtube.com/vi/ZpDYczMaSgw/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 5, chinese: '今天我们来做一道家常菜：西红柿炒鸡蛋。', pinyin: 'Jīntiān wǒmen lái zuò yī dào jiācháng cài: xīhóngshì chǎo jīdàn.', english: "Today we'll make a home-style dish: Scrambled Eggs with Tomatoes.", words: [{ chinese: '家常菜', pinyin: 'jiācháng cài', meaning: 'home-style dish', hskLevel: 3 }] },
      { startTime: 6, endTime: 10, chinese: '首先，把鸡蛋打到碗里搅拌均匀。', pinyin: 'Shǒuxiān, bǎ jīdàn dǎ dào wǎn lǐ jiǎobàn jūnyún.', english: 'First, crack the eggs into a bowl and stir evenly.', words: [{ chinese: '首先', pinyin: 'shǒuxiān', meaning: 'first', hskLevel: 3 }, { chinese: '碗', pinyin: 'wǎn', meaning: 'bowl', hskLevel: 2 }] },
      { startTime: 11, endTime: 16, chinese: '然后把西红柿切成小块。', pinyin: 'Ránhòu bǎ xīhóngshì qiē chéng xiǎo kuài.', english: 'Then cut the tomatoes into small pieces.', words: [{ chinese: '然后', pinyin: 'ránhòu', meaning: 'then', hskLevel: 2 }] },
      { startTime: 17, endTime: 22, chinese: '锅里放油，先把鸡蛋炒熟。', pinyin: 'Guō lǐ fàng yóu, xiān bǎ jīdàn chǎo shú.', english: 'Put oil in the pan, cook the eggs first.', words: [{ chinese: '油', pinyin: 'yóu', meaning: 'oil', hskLevel: 3 }] },
      { startTime: 23, endTime: 28, chinese: '最后加入西红柿，放盐和糖，翻炒两分钟。', pinyin: 'Zuìhòu jiārù xīhóngshì, fàng yán hé táng, fānchǎo liǎng fēnzhōng.', english: 'Finally add tomatoes, salt and sugar, stir-fry for two minutes.', words: [{ chinese: '最后', pinyin: 'zuìhòu', meaning: 'finally', hskLevel: 2 }] },
      { startTime: 29, endTime: 33, chinese: '好了，可以吃了！非常简单。', pinyin: 'Hǎo le, kěyǐ chī le! Fēicháng jiǎndān.', english: "Done, we can eat! Very simple.", words: [{ chinese: '简单', pinyin: 'jiǎndān', meaning: 'simple', hskLevel: 3 }] }
    ]
  },
  {
    id: 'news-report',
    youtubeId: 'Q3IfbSFnJFo',
    title: 'Chinese News Report: Weather Forecast',
    description: 'Practice listening to formal Mandarin by watching a weather report from Chinese television.',
    level: 3,
    thumbnailUrl: 'https://img.youtube.com/vi/Q3IfbSFnJFo/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 5, chinese: '现在播报今天的天气预报。', pinyin: 'Xiànzài bōbào jīntiān de tiānqì yùbào.', english: "Now broadcasting today's weather forecast.", words: [{ chinese: '天气', pinyin: 'tiānqì', meaning: 'weather', hskLevel: 1 }] },
      { startTime: 6, endTime: 11, chinese: '北京今天晴转多云，最高气温三十五度。', pinyin: 'Běijīng jīntiān qíng zhuǎn duōyún, zuìgāo qìwēn sānshíwǔ dù.', english: 'Beijing today: sunny turning cloudy, high of 35 degrees.', words: [{ chinese: '晴', pinyin: 'qíng', meaning: 'sunny', hskLevel: 3 }, { chinese: '度', pinyin: 'dù', meaning: 'degree', hskLevel: 3 }] },
      { startTime: 12, endTime: 17, chinese: '上海有中到大雨，请注意带伞。', pinyin: 'Shànghǎi yǒu zhōng dào dà yǔ, qǐng zhùyì dài sǎn.', english: 'Shanghai will have moderate to heavy rain, please bring an umbrella.', words: [{ chinese: '注意', pinyin: 'zhùyì', meaning: 'pay attention', hskLevel: 3 }, { chinese: '伞', pinyin: 'sǎn', meaning: 'umbrella', hskLevel: 3 }] },
      { startTime: 18, endTime: 23, chinese: '广州多云，气温二十八到三十三度。', pinyin: 'Guǎngzhōu duōyún, qìwēn èrshíbā dào sānshísān dù.', english: 'Guangzhou: cloudy, temperature 28 to 33 degrees.', words: [{ chinese: '多云', pinyin: 'duōyún', meaning: 'cloudy', hskLevel: 3 }] },
      { startTime: 24, endTime: 28, chinese: '以上就是今天的天气预报，祝大家出行愉快。', pinyin: 'Yǐshàng jiùshì jīntiān de tiānqì yùbào, zhù dàjiā chūxíng yúkuài.', english: "That's today's weather forecast. Have a pleasant trip.", words: [{ chinese: '愉快', pinyin: 'yúkuài', meaning: 'pleasant', hskLevel: 3 }] }
    ]
  },

  // --- NEW HSK 4 Videos ---
  {
    id: 'ted-talk-education',
    youtubeId: 'r4AGXWyIcco',
    title: 'TED Talk: The Future of Education in China',
    description: 'An inspiring talk about how technology is transforming education in modern China.',
    level: 4,
    thumbnailUrl: 'https://img.youtube.com/vi/r4AGXWyIcco/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 6, chinese: '教育是改变世界最有力的工具。', pinyin: 'Jiàoyù shì gǎibiàn shìjiè zuì yǒulì de gōngjù.', english: 'Education is the most powerful tool to change the world.', words: [{ chinese: '教育', pinyin: 'jiàoyù', meaning: 'education', hskLevel: 4 }, { chinese: '改变', pinyin: 'gǎibiàn', meaning: 'to change', hskLevel: 3 }] },
      { startTime: 7, endTime: 13, chinese: '在中国，科技正在彻底改变传统的教学方式。', pinyin: 'Zài Zhōngguó, kējì zhèngzài chèdǐ gǎibiàn chuántǒng de jiàoxué fāngshì.', english: 'In China, technology is fundamentally changing traditional teaching methods.', words: [{ chinese: '科技', pinyin: 'kējì', meaning: 'technology', hskLevel: 4 }, { chinese: '传统', pinyin: 'chuántǒng', meaning: 'traditional', hskLevel: 4 }] },
      { startTime: 14, endTime: 20, chinese: '人工智能让每个学生都能获得个性化的学习体验。', pinyin: 'Réngōng zhìnéng ràng měi gè xuéshēng dōu néng huòdé gèxìnghuà de xuéxí tǐyàn.', english: 'AI allows every student to get a personalized learning experience.', words: [{ chinese: '人工智能', pinyin: 'réngōng zhìnéng', meaning: 'artificial intelligence', hskLevel: 4 }] },
      { startTime: 21, endTime: 27, chinese: '我们不应该害怕变化，而应该拥抱它。', pinyin: 'Wǒmen bù yīnggāi hàipà biànhuà, ér yīnggāi yōngbào tā.', english: 'We should not fear change, but embrace it.', words: [{ chinese: '害怕', pinyin: 'hàipà', meaning: 'to fear', hskLevel: 3 }, { chinese: '变化', pinyin: 'biànhuà', meaning: 'change', hskLevel: 4 }] }
    ]
  },
  {
    id: 'movie-discussion',
    youtubeId: 'hSSbxETmQMk',
    title: 'Discussing a Chinese Movie',
    description: 'Two friends discuss a popular Chinese film, practicing opinion expressions and movie vocabulary.',
    level: 4,
    thumbnailUrl: 'https://img.youtube.com/vi/hSSbxETmQMk/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 5, chinese: '你看过那部新电影吗？叫《长津湖》。', pinyin: 'Nǐ kàn guo nà bù xīn diànyǐng ma? Jiào "Chángjīn Hú".', english: 'Have you seen that new movie? It\'s called "The Battle at Lake Changjin".', words: [{ chinese: '电影', pinyin: 'diànyǐng', meaning: 'movie', hskLevel: 1 }] },
      { startTime: 6, endTime: 11, chinese: '看了！我觉得非常感人，演员的表演也特别好。', pinyin: 'Kàn le! Wǒ juéde fēicháng gǎnrén, yǎnyuán de biǎoyǎn yě tèbié hǎo.', english: 'Yes! I thought it was very moving, and the actors\' performances were especially good.', words: [{ chinese: '感人', pinyin: 'gǎnrén', meaning: 'moving/touching', hskLevel: 4 }, { chinese: '演员', pinyin: 'yǎnyuán', meaning: 'actor', hskLevel: 4 }] },
      { startTime: 12, endTime: 17, chinese: '我也这么认为。故事情节虽然沉重，但很真实。', pinyin: 'Wǒ yě zhème rènwéi. Gùshì qíngjié suīrán chénzhòng, dàn hěn zhēnshí.', english: 'I think so too. The story is heavy, but very realistic.', words: [{ chinese: '认为', pinyin: 'rènwéi', meaning: 'to believe/think', hskLevel: 4 }, { chinese: '真实', pinyin: 'zhēnshí', meaning: 'real/authentic', hskLevel: 4 }] },
      { startTime: 18, endTime: 23, chinese: '据说导演花了三年时间准备这部电影。', pinyin: 'Jùshuō dǎoyǎn huā le sān nián shíjiān zhǔnbèi zhè bù diànyǐng.', english: 'It is said the director spent three years preparing this movie.', words: [{ chinese: '导演', pinyin: 'dǎoyǎn', meaning: 'director', hskLevel: 4 }, { chinese: '准备', pinyin: 'zhǔnbèi', meaning: 'to prepare', hskLevel: 3 }] }
    ]
  },

  // --- NEW HSK 5 Video ---
  {
    id: 'documentary-silk-road',
    youtubeId: 'vn3e2ZGEces',
    title: 'The Ancient Silk Road Documentary',
    description: 'An excerpt from a documentary about the history of the Silk Road and its influence on cultural exchange between East and West.',
    level: 5,
    thumbnailUrl: 'https://img.youtube.com/vi/vn3e2ZGEces/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 7, chinese: '丝绸之路是古代连接东西方的重要贸易通道。', pinyin: 'Sīchóu zhī lù shì gǔdài liánjiē dōngxīfāng de zhòngyào màoyì tōngdào.', english: 'The Silk Road was an important ancient trade route connecting East and West.', words: [{ chinese: '丝绸', pinyin: 'sīchóu', meaning: 'silk', hskLevel: 5 }, { chinese: '贸易', pinyin: 'màoyì', meaning: 'trade', hskLevel: 5 }] },
      { startTime: 8, endTime: 15, chinese: '它不仅促进了商品的交换，更推动了文化的传播与融合。', pinyin: 'Tā bùjǐn cùjìn le shāngpǐn de jiāohuàn, gèng tuīdòng le wénhuà de chuánbō yǔ rónghé.', english: 'It not only promoted the exchange of goods, but also advanced the spread and fusion of cultures.', words: [{ chinese: '促进', pinyin: 'cùjìn', meaning: 'to promote', hskLevel: 5 }, { chinese: '融合', pinyin: 'rónghé', meaning: 'fusion', hskLevel: 5 }] },
      { startTime: 16, endTime: 23, chinese: '在这条路上，佛教、伊斯兰教和基督教相互碰撞交融。', pinyin: 'Zài zhè tiáo lù shàng, fójiào, yīsīlánjiào hé jīdūjiào xiānghù pèngzhuàng jiāoróng.', english: 'Along this road, Buddhism, Islam, and Christianity collided and merged.', words: [{ chinese: '佛教', pinyin: 'fójiào', meaning: 'Buddhism', hskLevel: 5 }] },
      { startTime: 24, endTime: 30, chinese: '今天的"一带一路"倡议正是这一历史遗产的现代延续。', pinyin: 'Jīntiān de "yīdài yīlù" chàngyì zhèng shì zhè yī lìshǐ yíchǎn de xiàndài yánxù.', english: 'Today\'s "Belt and Road" initiative is a modern continuation of this historical legacy.', words: [{ chinese: '倡议', pinyin: 'chàngyì', meaning: 'initiative', hskLevel: 5 }, { chinese: '历史', pinyin: 'lìshǐ', meaning: 'history', hskLevel: 4 }] }
    ]
  },

  // --- NEW HSK 6 Video ---
  {
    id: 'formal-debate',
    youtubeId: 'WYs5gGLSZ-w',
    title: 'Formal Debate: Should AI Replace Teachers?',
    description: 'A university debate team discusses whether artificial intelligence should replace human teachers. Advanced listening with formal argumentation.',
    level: 6,
    thumbnailUrl: 'https://img.youtube.com/vi/WYs5gGLSZ-w/hqdefault.jpg',
    transcript: [
      { startTime: 0, endTime: 7, chinese: '我方认为，人工智能在可预见的未来不应也不能完全取代教师。', pinyin: 'Wǒ fāng rènwéi, réngōng zhìnéng zài kě yùjiàn de wèilái bù yīng yě bù néng wánquán qǔdài jiàoshī.', english: 'Our side believes that in the foreseeable future, AI should not and cannot fully replace teachers.', words: [{ chinese: '取代', pinyin: 'qǔdài', meaning: 'to replace', hskLevel: 6 }] },
      { startTime: 8, endTime: 15, chinese: '教育的核心不仅在于知识的传授，更在于人格的塑造和价值观的引导。', pinyin: 'Jiàoyù de héxīn bùjǐn zàiyú zhīshi de chuánshòu, gèng zàiyú réngé de sùzào hé jiàzhíguān de yǐndǎo.', english: 'The core of education lies not only in imparting knowledge, but also in shaping character and guiding values.', words: [{ chinese: '核心', pinyin: 'héxīn', meaning: 'core', hskLevel: 6 }, { chinese: '塑造', pinyin: 'sùzào', meaning: 'to shape', hskLevel: 6 }] },
      { startTime: 16, endTime: 22, chinese: '对方辩友忽略了一个根本性的问题：机器缺乏共情能力。', pinyin: 'Duìfāng biànyǒu hūlüè le yī gè gēnběnxìng de wèntí: jīqì quēfá gòngqíng nénglì.', english: 'Our opponents have overlooked a fundamental issue: machines lack the ability to empathize.', words: [{ chinese: '忽略', pinyin: 'hūlüè', meaning: 'to overlook', hskLevel: 6 }, { chinese: '共情', pinyin: 'gòngqíng', meaning: 'empathy', hskLevel: 6 }] },
      { startTime: 23, endTime: 30, chinese: '综上所述，技术应当辅助教育，而非颠覆教育的本质。', pinyin: 'Zōngshàng suǒshù, jìshù yīngdāng fǔzhù jiàoyù, ér fēi diānfù jiàoyù de běnzhì.', english: 'In summary, technology should assist education, not subvert the essence of education.', words: [{ chinese: '辅助', pinyin: 'fǔzhù', meaning: 'to assist', hskLevel: 6 }, { chinese: '颠覆', pinyin: 'diānfù', meaning: 'to subvert', hskLevel: 6 }] }
    ]
  }
];

export const getImmersionVideoById = (id: string) => immersionVideos.find(v => v.id === id);
