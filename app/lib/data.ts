// app/lib/data.ts
export type VideoItem = {
  title: string;
  url?: string;
  embedCode?: string;
  author?: string;
  category?: string;
  image?: string;
  type?: 'link' | 'embed';
};

export const videoData = {
  'top-video': [
    {
      title: '神韻早期節目: 梁山伯與祝英台片段',
      url: 'https://www.shenyuncreations.com/s/t/1NOzB4',
      author: '「神韻作品」',
      category: '神韻',
    },
    {
      title: '神韻早期節目: 餐館裡的笑聲',
      url: 'https://www.shenyuncreations.com/s/t/1SQrcN',
      author: '「神韻作品」',
      category: '神韻',
    },
    {
      title: '神韻早期節目: 天仙彩虹',
      url: 'https://www.shenyuncreations.com/s/t/1Z3VtB',
      author: '「神韻作品」',
      category: '神韻',
    },
    {
      title: ' 神韻早期節目:擒鰲拜',
      url: 'https://www.shenyuncreations.com/s/t/Dv8Vh',
      author: '「神韻作品」',
      category: '神韻',
    },
    {
      title: '堅不可摧：神韻幕後的故事',
      url: 'https://www.ganjingworld.com/s/K8RaWJOEl4',
      author: '「GJW+」',
      category: '電影《堅不可摧》',
    },
    {
      title: '《堅不可摧》加拿大首映座談會 神韻藝術家們暢敘',
      url: 'https://www.ganjingworld.com/s/E3WN3bBvVb',
      author: '「新唐人精選新聞」',
      category: '電影《堅不可摧》',
    },
    {
      title: '現場：神韻《堅不可摧：神韻幕後的故事》加拿大首映式Q&A',
      url: 'https://www.ganjingworld.com/s/7vVxzxYeXV',
      author: '「新唐人電視台NTDTV」',
      category: '電影《堅不可摧》',
    },
    {
      title: '國會議員讚神韻指路明燈 頒褒獎賀重返多倫多',
      url: 'https://www.ganjingworld.com/s/8MKq4kw4qQ',
      author: '「新唐人精選新聞」',
      category: '神韻重返多倫多',
    },
    {
      title: '國際人權律師讚：神韻兼具藝術美感與人權內涵',
      url: 'https://www.ganjingworld.com/s/mwWw9lXkk3',
      author: '「加拿大新唐人中文新聞」',
      category: '神韻重返多倫多',
    },
    {
      title: '國會議員褒獎 讚神韻重返多倫多是重要里程碑',
      url: 'https://www.ganjingworld.com/s/7MRX3JKKRg',
      author: '「加拿大新唐人中文新聞」',
      category: '神韻重返多倫多',
    },
    {
      title: '資深製片人讚神韻登峰造極 盼福澤中國大地',
      url: 'https://www.ganjingworld.com/s/qlXz0Awa6A',
      author: '「加拿大新唐人中文新聞」',
      category: '神韻重返多倫多',
    },
  ],

  audio: [
    {
      title: '大法是歸度',
      url: 'https://www.joankingmusic.com/blog/music000442',
      author: '「凈泉音樂原創」',
      category: '妙音',
    },
    {
      title: '萬王之王',
      url: 'https://www.joankingmusic.com/blog/music000349',
      author: '「凈泉音樂原創」',
      category: '妙音',
    },
    {
      title: '雨中燈',
      url: 'https://www.joankingmusic.com/blog/music000394',
      author: '「凈泉音樂原創」',
      category: '妙音',
    },
    {
      title: '彼岸',
      url: 'https://www.joankingmusic.com/blog/music000446',
      author: '「凈泉音樂原創」',
      category: '妙音',
    },
  ],

  culture: [
    {
      title: '這樣做 讓你的孩子愛上閱讀(圖)',
      url: 'http://kzg.io/b54cB8',
      author: '「看中國」',
      category: '讀',
    },
    {
      title: '4月份三退逾120萬 比上月增3萬 歷史在等待你的名字(組圖)',
      url: 'http://kzg.io/b54buT',
      author: '「看中國」',
      category: '三退',
    },
    {
      title: '洪水肆虐貴州廣西 山體滑坡奪命 街道變河房屋泡水(圖)',
      url: 'http://kzg.io/b54cQU',
      author: '「看中國」',
      category: '洪水',
    },
    {
      title: '神韻20週年壓軸戲即將上演 加政要賀重返多倫多(圖)',
      url: 'http://kzg.io/b54cQc',
      author: '「看中國」',
      category: '神韻重返多倫多',
    },
    {
      title: '神韻重返多倫多首演爆滿 觀眾：以行動反擊跨國鎮壓(圖)',
      url: 'http://kzg.io/b54cSz',
      author: '「看中國」',
      category: '神韻重返多倫多',
    },
    {
      title: '香港泰拳王終圓觀神韵心願 感歎邪不勝正(圖)',
      url: 'http://kzg.io/b54cU3',
      author: '「看中國」',
      category: '神韻重返多倫多',
    },
    {
      title: '美國250週年：為何說信仰才是美國真正的立國根基？(圖)',
      url: 'http://kzg.io/b54cU4',
      author: '「看中國」',
      category: '信仰',
    },
    {
      title: '願神韻恩澤天下 救華夏於危難(圖)',
      url: 'http://kzg.io/b54cVf',
      author: '「看中國」',
      category: '神韻重返多倫多',
    },
    {
      title: '穿在身上的帝王密碼 揭開「十二章紋」的神秘面紗(圖)',
      url: 'http://kzg.io/b54cVq',
      author: '「看中國」',
      category: '帝王',
    },
  ],

  others: [
    {
      title:
        '吃素越久，反而越容易健忘？有些人不是老了，而是大腦缺了一種關鍵營養...',
      url: 'https://www.ganjingworld.com/s/GmjgzQ8rv4',
      author: '「健康1+1」',
      category: '營養',
    },
    {
      title:
        '大便常常是深色！腸道可能出事？有些人長期大便顏色偏深，通常和飲食習慣有關。像是煎、炸、炒這類高溫料理，容易讓食物產生較多負擔性的代謝物，長期下來，可能讓腸道環境比較不理想。',
      url: 'https://www.ganjingworld.com/s/kgx0Ba8ZRo',
      author: '「健康1+1」',
      category: '飲食',
    },
    {
      title:
        '按這裡！天然美白+消眼袋 如果最近：✔︎顏色暗沉 ✔︎看起來蠟黃 ✔︎眼袋越來越明顯 試試按摩 四白穴 幫助循環，讓氣色看起來更有精神。有時你需要的，不是更多保養品。而是循環變好。',
      url: 'https://www.ganjingworld.com/s/NpMq0XYv2l',
      author: '「健康1+1」',
      category: '循環',
    },
  ],

  original: [],

  zenith: [
    {
      title: '2023 神韻交響樂 《筷子舞》',
      type: 'embed' as const,
      embedCode: `<iframe width="100%" height="500" src="https://www.shenyuncreations.com/zh-TW/embed/_video_e606bd9dcdcc48739fa9ec4a71b090c5/Mongolian-Chopsticks---2023-Shen-Yun-Symphony-Orchestra?pid=p_BkqASChRSLaH" title="2023 神韻交響樂 《筷子舞》" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen></iframe>`,
    },
  ],

  // 新增這一段
  xuan: [
    {
      title: '150歲延壽工程還在進行;遠古國王真的活了幾千歲? 蘇美爾王表之謎',
      url: 'https://www.ganjingworld.com/s/6gAVMWwo4y',
      author: '「玄乎神乎」',
      category: '“延壽”？',
    },
  ],
} as const;
// ==================== 善緣原創視頻 ====================

export type OriginalVideo = {
  id: number;
  title: string;
  videoSrc: string;
  thumbnail: string;
};

export const originalVideos: OriginalVideo[] = [
  {
    id: 1,
    title: '三退',
    videoSrc: '/videos/st.mp4', // ← 改成 videos
    thumbnail: '/videos/st.jpg', // ← 改成 videos
  },
  {
    id: 2,
    title: '許仙夢醒',
    videoSrc: '/videos/xxmx.mp4', // ← 改成 videos
    thumbnail: '/videos/xxmx.jpg', // ← 改成 videos
  },
];
