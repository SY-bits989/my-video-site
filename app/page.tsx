'use client';

import { useSearchParams } from 'next/navigation';
import { originalVideos } from './lib/data';
import styles from './page.module.css';
import { useEffect, useRef, Suspense } from 'react';

function DesktopVideoPlayer() {
  const searchParams = useSearchParams();
  const videoIdParam = searchParams.get('video');
  const currentVideo =
    originalVideos.find((v) => String(v.id) === videoIdParam) ||
    originalVideos[1];

  return (
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
  );
}

export default function OriginalPage() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const videos = videoRefs.current.filter(
      (v): v is HTMLVideoElement => v !== null,
    );

    // 強制只允許一個視頻播放（已驗證有效）
    const handlePlay = (currentVideo: HTMLVideoElement) => {
      videos.forEach((video) => {
        if (video !== currentVideo) video.pause();
      });
    };

    videos.forEach((video) => {
      video.addEventListener('play', () => handlePlay(video));
    });

    // ==================== 自動播放（已修正 TypeScript 錯誤） ====================
    let observer: IntersectionObserver | null = null;

    const timer = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target as HTMLVideoElement;

            if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
              // 暫停其他視頻
              videos.forEach((v) => {
                if (v !== video) v.pause();
              });

              video.muted = true;
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: '0px 0px -20% 0px',
        },
      );

      videos.forEach((video) => observer!.observe(video));
    }, 800);

    return () => {
      clearTimeout(timer);
      videos.forEach((video) => {
        video.removeEventListener('play', () => handlePlay(video));
      });
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.mainContent}>
      <Suspense
        fallback={
          <div className={styles.desktopView}>
            <div
              style={{
                padding: '3rem 1rem',
                textAlign: 'center',
                color: '#666',
              }}
            >
              載入中...
            </div>
          </div>
        }
      >
        <DesktopVideoPlayer />
      </Suspense>

      <div className={styles.mobileFeed}>
        {originalVideos.map((video, index) => (
          <div key={video.id} className={styles.feedItem}>
            <div className={styles.feedTitle}>{video.title}</div>

            <div className={styles.videoContainer}>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                controls
                className={styles.feedVideo}
                poster={video.thumbnail}
                loop
                playsInline
                muted
                preload="metadata"
              >
                <source src={video.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
