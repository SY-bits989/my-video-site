// app/page.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { originalVideos } from './lib/data';
import styles from './page.module.css';

export default function OriginalPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  // 從 URL 獲取 video id，沒有則預設許仙夢醒 (id:2)
  const videoIdParam = searchParams.get('video');
  const currentVideo =
    originalVideos.find((v) => String(v.id) === videoIdParam) ||
    originalVideos[1];

  // 切換影片時暫停自動播放
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.load(); // 確保新影片正確載入
    }
  }, [currentVideo]);

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.mainTitle}>{currentVideo.title}</h1>

      <div className={styles.playerWrapper}>
        <video
          ref={videoRef}
          controls
          className={styles.videoPlayer}
          poster={currentVideo.thumbnail}
          key={currentVideo.videoSrc} // 重要：強制重新渲染 video 元素
        >
          <source src={currentVideo.videoSrc} type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
      </div>
    </div>
  );
}
