// app/lib/data.ts
export type VideoItem = {
  title: string;
  url: string;
  desc?: string;
  image?: string;        // 之後要加縮圖時會用到
};

export const videoData = {
  "top-video": [
    { 
      title: "神韻早期節目: 梁山伯與祝英台片段", 
      url: "https://www.shenyuncreations.com/s/t/1NOzB4", 
      desc: "" 
    },
    { 
      title: "神韻早期節目: 餐館裡的笑聲", 
      url: "https://www.shenyuncreations.com/s/t/1SQrcN", 
      desc: "" 
    },
    { 
      title: "神韻早期節目: 天仙彩虹", 
      url: "https://www.shenyuncreations.com/s/t/1Z3VtB", 
      desc: "" 
    },
    { 
      title: "神韻早期節目:擒鰲拜", 
      url: "https://www.shenyuncreations.com/s/t/Dv8Vh", 
      desc: "" 
    },
  ],
  "audio": [
    { title: "凈泉音樂原創：大法是歸度", url: "https://www.joankingmusic.com/blog/music000442", desc: "" },
    { title: "凈泉音樂原創：萬王之王", url: "https://www.joankingmusic.com/blog/music000349", desc: "" },
  ],
  "culture": [
    { title: "看中國：這樣做 讓你的孩子愛上閱讀", url: "http://kzg.io/b54cB8", desc: "" },
  ],
  "others": [
    { title: "健康1+1: 吃素越久，反而越容易健忘？有些人不是老了，而是大腦缺了一種關鍵營養...", url: "https://www.ganjingworld.com/s/GmjgzQ8rv4", desc: "" },
  ],
  "original": []
} as const;