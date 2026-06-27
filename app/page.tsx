// app/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { originalVideos } from './lib/data';
import styles from './page.module.css';
import { useEffect, useRef } from 'react';

export default function OriginalPage() {
  const searchParams = useSearchParams();
  const videoIdParam = searchParams.get('video');
  const currentVideo =
    originalVideos.find((v) => String(v.id) === videoIdParam) ||
    originalVideos[1];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            video.muted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.mainContent}>
      {/* ==================== 電腦版 ==================== */}
      <div className={styles.desktopView}>
        <h1 className={styles.mainTitle}>{currentVideo.title}</h1>
        <div className={styles.playerWrapper}>
          <video
            controls
            className={styles.videoPlayer}
            poster={currentVideo.thumbnail}
            key={currentVideo.videoSrc}
          >
            <source src={currentVideo.videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ==================== 手機版 - 垂直 Feed ==================== */}
      <div className={styles.mobileFeed}>
        {originalVideos.map((video, index) => (
          <div key={video.id} className={styles.feedItem}>
            <div className={styles.feedTitle}>{video.title}</div>
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              controls
              className={styles.feedVideo}
              poster={video.thumbnail}
              loop
              playsInline
            >
              <source src={video.videoSrc} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}
