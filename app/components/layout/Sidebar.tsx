// app/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import { originalVideos } from '../../lib/data';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const isJingxuan = pathname === '/jingxuan' || pathname === '/jingxuan/';

  const jingxuanTabs = [
    { id: 'qiongding', name: '穹頂樂', key: 'zenith' },
    { id: 'tianding', name: '天頂視頻', key: 'top-video' },
    { id: 'qiangu', name: '千古文化', key: 'culture' },
    { id: 'miaoyin', name: '妙音', key: 'audio' },
    { id: 'xuan', name: '玄', key: 'xuan' },
    { id: 'meishi', name: '美味', key: 'others' },
  ];

  // ==================== 選中狀態 ====================
  const [activeTab, setActiveTab] = useState<string>('');

  // 監聽 hash 變化（讓使用者直接從網址跳轉也能正確高亮）
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) setActiveTab(hash);
    };

    handleHashChange(); // 初始化
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <Image
          src="/logo.png"
          alt=""
          width={280}
          height={93}
          className={styles.logo}
          priority
        />
      </div>

      <div className={styles.mainTabs}>
        <Link
          href="/"
          className={`${styles.tab} ${pathname === '/' ? styles.tabActive : ''}`}
        >
          原創
        </Link>
        <Link
          href="/jingxuan"
          className={`${styles.tab} ${isJingxuan ? styles.tabActive : ''}`}
        >
          精選
        </Link>
      </div>

      <div className={styles.videoSection}>
        {!isJingxuan ? (
          // 原創頁面
          <>
            <h3 className={styles.sectionTitle}>原創短視頻</h3>
            <div className={styles.videoList}>
              {originalVideos.map((video) => (
                <Link
                  key={video.id}
                  href={`/?video=${video.id}`}
                  className={styles.videoCard}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className={styles.thumbnail}
                  />
                  <div className={styles.cardTitle}>{video.title}</div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          // 精選頁面
          <>
            <h3 className={styles.sectionTitle}>精選內容</h3>

            <div className={styles.subTabs}>
              {jingxuanTabs.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`${styles.subTab} ${activeTab === tab.id ? styles.subTabActive : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  {tab.name}
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
