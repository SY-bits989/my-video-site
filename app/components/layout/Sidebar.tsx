// app/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import { originalVideos } from '../../lib/data';

const subCategories = [
  { id: 'qiongding', name: '穹頂樂', key: 'zenith' as const },
  { id: 'tianding', name: '天頂視頻', key: 'top-video' as const },
  { id: 'qiangu', name: '千古文化', key: 'culture' as const },
  { id: 'miaoyin', name: '妙音', key: 'audio' as const },
  { id: 'xuan', name: '玄', key: 'xuan' as const },
  { id: 'meishi', name: '美味', key: 'others' as const },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isJingxuan = pathname === '/jingxuan' || pathname === '/jingxuan/';

  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <Image
          src="/logo.png"
          alt="善緣"
          width={80}
          height={80}
          className={styles.logo}
        />
        <h1 className={styles.siteTitle}>善緣</h1>
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
          // 原創
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
          // 精選 - 簡化版（暫時不顯示 active 狀態）
          <>
            <h3 className={styles.sectionTitle}>精選分類</h3>
            <div className={styles.subTabs}>
              {subCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/jingxuan?tab=${cat.id}`}
                  className={styles.subTab}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
