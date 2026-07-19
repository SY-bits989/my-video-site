// app/lib/data.ts

// ==================== Type Definitions ====================
export type EmbedVideoItem = {
  type: 'embed';
  title: string;
  embedCode: string;
};

export type LinkVideoItem = {
  type: 'link';
  title: string;
  url: string;
  author: string;
  category: string;
};

export type VideoItem = EmbedVideoItem | LinkVideoItem;

// ==================== Main Content Data ====================
export const videoData = {
  zenith: [
    {
      type: 'embed',
      title: '2023 神韻交響樂 《筷子舞》',
      embedCode: `<iframe width="100%" height="500" src="https://www.shenyuncreations.com/zh-TW/embed/_video_e606bd9dcdcc48739fa9ec4a71b090c5/Mongolian-Chopsticks---2023-Shen-Yun-Symphony-Orchestra?pid=p_BkqASChRSLaH" title="2023 神韻交響樂 《筷子舞》" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    },
  ] as const satisfies EmbedVideoItem[],

  'top-video': [
    {
      type: 'link',
      title: '神韻早期節目: 梁山伯與祝英台片段（2019年製作）',
      url: 'https://www.shenyuncreations.com/s/t/1NOzB4',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '神韻早期節目: 餐館裡的笑聲（2019年製作）',
      url: 'https://www.shenyuncreations.com/s/t/1SQrcN',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '神韻早期節目: 天仙彩虹（2018年製作）',
      url: 'https://www.shenyuncreations.com/s/t/1Z3VtB',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '神韻早期節目:擒鰲拜（2016年製作)',
      url: 'https://www.shenyuncreations.com/s/t/Dv8Vh',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '堅不可摧：神韻幕後的故事 | 乾淨世界首播',
      url: 'https://www.ganjingworld.com/s/K8RaWJOEl4',
      author: '「GJW+」',
      category: '',
    },
    {
      type: 'link',
      title: '《堅不可摧》加拿大首映座談會 神韻藝術家們暢敘',
      url: 'https://www.ganjingworld.com/s/E3WN3bBvVb',
      author: '「新唐人精選新聞」',
      category: '',
    },
    {
      type: 'link',
      title:
        '現場：神韻《堅不可摧：神韻幕後的故事》加拿大首映式Q&A（中文同聲翻譯）',
      url: 'https://www.ganjingworld.com/s/7vVxzxYeXV',
      author: '「新唐人電視台NTDTV」',
      category: '',
    },
    {
      type: 'link',
      title: '第十屆新唐人全世界中國古典舞大賽 青年男子組金獎：包正宇',
      url: 'https://www.shenyuncreations.com/s/t/njHw2',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '第十屆新唐人全世界中國古典舞大賽 少年男子組金獎：包明宇',
      url: 'https://www.shenyuncreations.com/s/t/2goSg3',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '國會議員讚神韻指路明燈 頒褒獎賀重返多倫多',
      url: 'https://www.ganjingworld.com/s/8MKq4kw4qQ',
      author: '「新唐人精選新聞」',
      category: '',
    },
    {
      type: 'link',
      title: '國際人權律師讚：神韻兼具藝術美感與人權內涵',
      url: 'https://www.ganjingworld.com/s/mwWw9lXkk3',
      author: '「加拿大新唐人中文新聞」',
      category: '',
    },
    {
      type: 'link',
      title: '國會議員褒獎 讚神韻重返多倫多是重要里程碑',
      url: 'https://www.ganjingworld.com/s/7MRX3JKKRg',
      author: '「加拿大新唐人中文新聞」',
      category: '',
    },
    {
      type: 'link',
      title: '資深製片人讚神韻登峰造極 盼福澤中國大地',
      url: 'https://www.ganjingworld.com/s/qlXz0Awa6A',
      author: '「加拿大新唐人中文新聞」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  culture: [
    {
      type: 'link',
      title: '這樣做 讓你的孩子愛上閱讀(圖)',
      url: 'http://kzg.io/b54cB8',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '4月份三退逾120萬 比上月增3萬 歷史在等待你的名字(組圖)',
      url: 'http://kzg.io/b54buT',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '洪水肆虐貴州廣西 山體滑坡奪命 街道變河房屋泡水(圖)',
      url: 'http://kzg.io/b54cQU',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '神韻20週年壓軸戲即將上演 加政要賀重返多倫多(圖)',
      url: 'http://kzg.io/b54cQc',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '神韻重返多倫多首演爆滿 觀眾：以行動反擊跨國鎮壓(圖)',
      url: 'http://kzg.io/b54cSz',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '香港泰拳王終圓觀神韵心願 感歎邪不勝正(圖)',
      url: 'http://kzg.io/b54cU3',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '美國250週年：為何說信仰才是美國真正的立國根基？(圖)',
      url: 'http://kzg.io/b54cU4',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '願神韻恩澤天下 救華夏於危難(圖)',
      url: 'http://kzg.io/b54cVf',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title:
        '穿在身上的帝王密碼 揭開「十二章紋」的神秘面紗(圖) 天子的衣服上究竟都有啥',
      url: 'http://kzg.io/b54cVq',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title:
        '🎈中國傳統文化裡的漢字「胖」，原來藏著古人最高級的審美智慧⭐️⭐️⭐️⭐️⭐️',
      url: 'https://www.ganjingworld.com/s/JmR7kkWwyR',
      author: '「凈泉音樂原創 JQ Music」',
      category: '',
    },
    {
      type: 'link',
      title: '如何扭轉命運？人生覺醒靠10種高維能力(圖)',
      url: 'http://kzg.io/b54cYX',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '擔心三高少吃肉真的對嗎？小心肌少症！(圖)',
      url: 'http://kzg.io/b54cYd',
      author: '「看中國」',
      category: '',
    },
    {
      type: 'link',
      title: '巴菲特：人生其實只需要做好6件事(圖)',
      url: 'http://kzg.io/b54ccX',
      author: '「看中國」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  audio: [
    {
      type: 'link',
      title: '大法是歸度',
      url: 'https://www.joankingmusic.com/blog/music000442',
      author: '「凈泉音樂原創 JQ Music」',
      category: '',
    },
    {
      type: 'link',
      title: '萬王之王',
      url: 'https://www.joankingmusic.com/blog/music000349',
      author: '「凈泉音樂原創 JQ Music」',
      category: '',
    },
    {
      type: 'link',
      title: '雨中燈',
      url: 'https://www.joankingmusic.com/blog/music000394',
      author: '「凈泉音樂原創 JQ Music」',
      category: '',
    },
    {
      type: 'link',
      title: '彼岸',
      url: 'https://www.joankingmusic.com/blog/music000446',
      author: '「凈泉音樂原創 JQ Music」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  xuan: [
    {
      type: 'link',
      title: '150歲延壽工程還在進行;遠古國王真的活了幾千歲? 蘇美爾王表之謎',
      url: 'https://www.ganjingworld.com/s/6gAVMWwo4y',
      author: '「玄乎神乎」',
      category: '',
    },
    {
      type: 'link',
      title: '驚人揭秘: 一場精心設計的陷阱! 《外星人訪談錄》(上)',
      url: 'https://www.ganjingworld.com/s/Qp0OKENM49',
      author: '「玄乎神乎」',
      category: '',
    },
    {
      type: 'link',
      title: '外星人警告: 死亡後不要做這件事! UFO墜毀真相...《外星人訪談錄》下',
      url: 'https://www.ganjingworld.com/s/3RNWAEGJ1M',
      author: '「玄乎神乎」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  others: [
    {
      type: 'link',
      title:
        '吃素越久，反而越容易健忘？有些人不是老了，而是大腦缺了一種關鍵營養...',
      url: 'https://www.ganjingworld.com/s/GmjgzQ8rv4',
      author: '「健康1+1」',
      category: '',
    },
    {
      type: 'link',
      title:
        '大便常常是深色！腸道可能出事？有些人長期大便顏色偏深，通常和飲食習慣有關。像是煎、炸、炒這類高溫料理，容易讓食物產生較多負擔性的代謝物，長期下來，可能讓腸道環境比較不理想。',
      url: 'https://www.ganjingworld.com/s/kgx0Ba8ZRo',
      author: '「健康1+1」',
      category: '',
    },
    {
      type: 'link',
      title:
        '按這裡！天然美白+消眼袋 如果最近：✔︎顏色暗沉 ✔︎看起來蠟黃 ✔︎眼袋越來越明顯 試試按摩 四白穴 幫助循環，讓氣色看起來更有精神。有時你需要的，不是更多保養品。而是循環變好。',
      url: 'https://www.ganjingworld.com/s/NpMq0XYv2l',
      author: '「健康1+1」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  original: [] as const satisfies VideoItem[],
} as const;

// ==================== 原創視頻（保持不動） ====================
export type OriginalVideo = {
  id: number;
  title: string;
  videoSrc: string;
  thumbnail: string;
};

export const originalVideos: OriginalVideo[] = [
  {
    id: 1,
    title: '7.20',
    videoSrc: '/videos/720.mp4',
    thumbnail: '/videos/720.webp',
  },
];
// ==================== 創作實驗（Lab Experiments） ====================
export type LabExperiment = {
  id: string;
  title: string;
  thumbnail: string;
  videoSrc: string;
};

export const labExperiments: LabExperiment[] = [];
