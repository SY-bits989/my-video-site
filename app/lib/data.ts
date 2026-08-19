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

// ==================== 精選分類（新增這裡） ====================
export const jingxuanCategories = [
  { id: 'tianding', name: '宇宙視頻', key: 'top-video' as const },
  { id: 'xuan', name: '玄', key: 'xuan' as const },
  { id: 'miaoyin', name: '妙', key: 'audio' as const },
] as const;

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
      title: '2023 神韻交響樂 《末後救度》',
      url: 'https://www.shenyuncreations.com/s/t/1bROgq',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '2019 神韻交響樂《法正人間》',
      url: 'https://www.shenyuncreations.com/s/t/19NnnG',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '2018 神韻交響樂《下世救眾生》',
      url: 'https://www.shenyuncreations.com/s/t/1XebY0',
      author: '「神韻作品」',
      category: '',
    },
    {
      type: 'link',
      title: '救世正法',
      url: 'https://www.shenyuncreations.com/s/t/2eC5kg',
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
      title: '《堅不可摧》美國會山放映 政要主流譴責中共跨國鎮壓',
      url: 'https://www.ganjingworld.com/s/9MMOvO6pbp',
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
      title: '美國會山現場直播：紀錄片《堅不可摧》專題討論會 （同聲翻譯）',
      url: 'https://www.ganjingworld.com/s/o7JyoVZXVN',
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
  ] as const satisfies LinkVideoItem[],

  'audio': [
    {
      type: 'link',
      title:
        '清風幽蘭',
      url: 'https://www.joankingmusic.com/blog/music000206',
      author: '「淨泉音樂原創」',
      category: '',
    },
    {
      type: 'link',
      title:
        '正念如獅',
      url: 'https://www.joankingmusic.com/blog/music000447',
      author: '「淨泉音樂原創」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

  'xuan': [
    {
      type: 'link',
      title: '跨越5000年的驚人對話! 聲音真的能改變現實? 你的耳朵如何真正聽懂【宇宙的聲音】- 2',
      url: 'https://youtu.be/MdrWYA8ogw0',
      author: '「玄乎神乎」',
      category: '',
    },
    {
      type: 'link',
      title: '一條公式, 揭開聲音療癒的最大秘密! 科學界為此尋找了30年 - 【宇宙的聲音】-1',
      url: 'https://youtu.be/csFesKS9Lk0',
      author: '「玄乎神乎」',
      category: '',
    },
  ] as const satisfies LinkVideoItem[],

} as const;

// ==================== 原創視頻（保持不動） ====================
export type OriginalVideo = {
  id: number;
  title: string;
  videoSrc: string;
  videoSrcWebm?: string;
  thumbnail: string;
};

export const originalVideos: OriginalVideo[] = [
  {
    id: 1,
    title: '返本歸真',
    videoSrc: '/videos/fbgz.mp4',
    videoSrcWebm: '/videos/fbgz.webm',
    thumbnail: '/videos/fbgz.webp',
  },
  {
    id: 2,
    title: '上善若水',
    videoSrc: '/videos/ss.mp4',
    videoSrcWebm: '/videos/ss.webm',
    thumbnail: '/videos/ss.webp',
  },
];
// ==================== 創作實驗（Lab Experiments） ====================
export type LabExperiment = {
  id: string;
  title: string;
  thumbnail: string;
  videoSrc: string;
  videoSrcWebm?: string;
};

export const labExperiments: LabExperiment[] = [];
