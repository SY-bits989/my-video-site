// app/lib/data.ts
export type VideoItem = {
  title: string;
  url?: string;
  embedCode?: string;
  desc?: string;
  image?: string;
  type?: 'link' | 'embed';
};

export const videoData = {
  'top-video': [
    {
      title: '神韻早期節目: 梁山伯與祝英台片段',
      url: 'https://www.shenyuncreations.com/s/t/1NOzB4',
      desc: '',
    },
    {
      title: '神韻早期節目: 餐館裡的笑聲',
      url: 'https://www.shenyuncreations.com/s/t/1SQrcN',
      desc: '',
    },
    {
      title: '神韻早期節目: 天仙彩虹',
      url: 'https://www.shenyuncreations.com/s/t/1Z3VtB',
      desc: '',
    },
    {
      title: '神韻早期節目:擒鰲拜',
      url: 'https://www.shenyuncreations.com/s/t/Dv8Vh',
      desc: '',
    },
  ],

  audio: [
    {
      title: '凈泉音樂原創：大法是歸度',
      url: 'https://www.joankingmusic.com/blog/music000442',
      desc: '',
    },
    {
      title: '凈泉音樂原創：萬王之王',
      url: 'https://www.joankingmusic.com/blog/music000349',
      desc: '',
    },
    {
      title: '凈泉音樂原創：雨中燈',
      url: 'https://www.joankingmusic.com/blog/music000394',
      desc: '',
    },
    {
      title: '凈泉音樂原創：彼岸',
      url: 'https://www.joankingmusic.com/blog/music000446',
      desc: '',
    },
  ],

  culture: [
    {
      title: '看中國：這樣做 讓你的孩子愛上閱讀',
      url: 'http://kzg.io/b54cB8',
      desc: '',
    },
    {
      title: '看中國：4月份三退逾120萬 比上月增3萬 歷史在等待你的名字',
      url: 'http://kzg.io/b54buT',
      desc: '',
    },
    {
      title: '看中國：洪水肆虐貴州廣西 山體滑坡奪命 街道變河房屋泡水',
      url: 'http://kzg.io/b54cQU',
      desc: '',
    },
  ],

  others: [
    {
      title:
        '健康1+1: 吃素越久，反而越容易健忘？有些人不是老了，而是大腦缺了一種關鍵營養...',
      url: 'https://www.ganjingworld.com/s/GmjgzQ8rv4',
      desc: '',
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
      title:
        '玄乎神乎: 150歲延壽工程還在進行;遠古國王真的活了幾千歲? 蘇美爾王表之謎',
      url: 'https://www.ganjingworld.com/s/6gAVMWwo4y',
      desc: '',
    },
  ],
} as const;
// ==================== 善緣原創視頻 ====================

export type OriginalVideo = {
  id: number;
  title: string;
  videoSrc: string;
  thumbnail: string;
  desc?: string;
};

export const originalVideos: OriginalVideo[] = [
  {
    id: 1,
    title: '三退',
    videoSrc: '/videos/st.mp4', // ← 改成 videos
    thumbnail: '/videos/st.jpg', // ← 改成 videos
    desc: '',
  },
  {
    id: 2,
    title: '許仙夢醒',
    videoSrc: '/videos/xxmx.mp4', // ← 改成 videos
    thumbnail: '/videos/xxmx.jpg', // ← 改成 videos
    desc: '',
  },
];
