'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { originalVideos, labExperiments } from '../lib/data';
import styles from './page.module.css';

interface PlayItem {
  title: string;
  videoSrc: string;
  thumbnail: string;
}

export default function OriginalPage() {
  const [playItem, setPlayItem] = useState<PlayItem | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const allItems: PlayItem[] = [
    ...originalVideos.map((v) => ({
      title: v.title,
      videoSrc: v.videoSrc,
      thumbnail: v.thumbnail,
    })),
    ...labExperiments.map((exp) => ({
      title: exp.title,
      videoSrc: exp.videoSrc,
      thumbnail: exp.thumbnail,
    })),
  ];

  // 電腦版開啟 Modal
  const openModal = (item: PlayItem) => {
    setPlayItem(item);
  };

  const closeModal = () => {
    setPlayItem(null);
  };

  // 手機版互斥播放
  const handleMobilePlay = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  return (
    <div className={styles.container}>
      {/* 頂部導航按鈕 */}
      <div className={styles.topNav}>
        <Link href="/" className={styles.navButton}>
          ← 返回首頁
        </Link>
        <Link href="/jingxuan" className={styles.navButton}>
          前往推薦 →
        </Link>
      </div>

      {/* ==================== 電腦版 ==================== */}
      <div className={styles.desktopOnly}>
        {/* 正式作品區 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>善圓</h2>
          <div className={styles.thumbnailGrid}>
            {originalVideos.map((video) => (
              <div
                key={video.id}
                className={styles.thumbnailCard}
                onClick={() =>
                  openModal({
                    title: video.title,
                    videoSrc: video.videoSrc,
                    thumbnail: video.thumbnail,
                  })
                }
              >
                <div
                  className={styles.thumbnailImage}
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                />
                <div className={styles.thumbnailTitle}>{video.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 創作實驗區 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}></h2>
          <div className={styles.thumbnailGrid}>
            {labExperiments.map((exp) => (
              <div
                key={exp.id}
                className={styles.thumbnailCard}
                onClick={() =>
                  openModal({
                    title: exp.title,
                    videoSrc: exp.videoSrc,
                    thumbnail: exp.thumbnail,
                  })
                }
              >
                <div
                  className={styles.thumbnailImage}
                  style={{ backgroundImage: `url(${exp.thumbnail})` }}
                />
                <div className={styles.thumbnailTitle}>{exp.title}</div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ==================== 手機版：3 個正方形播放器 ==================== */}
      <div className={styles.mobileOnly}>
        <h2 className={styles.sectionTitle}>善圓</h2>

        {allItems.map((item, index) => (
          <div key={index} className={styles.mobileFeedItem}>
            <div className={styles.mobileFeedTitle}>{item.title}</div>
            <div className={styles.mobilePlayerWrapper}>
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                controls
                playsInline
                className={styles.mobileVideoPlayer}
                poster={item.thumbnail}
                onPlay={() => handleMobilePlay(index)}
              >
                <source src={item.videoSrc} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== Modal（電腦版使用） ==================== */}
      {playItem && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>

            <div className={styles.modalPlayer}>
              <video
                controls
                autoPlay
                className={styles.modalVideo}
                poster={playItem.thumbnail}
                key={playItem.videoSrc}
              >
                <source src={playItem.videoSrc} type="video/mp4" />
              </video>
            </div>

            <h2 className={styles.modalTitle}>{playItem.title}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
