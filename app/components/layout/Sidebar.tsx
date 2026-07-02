// app/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Sidebar.module.css';
import { originalVideos } from '../../lib/data';

export default function Sidebar() {
  const pathname = usePathname();
  const isJingxuan = pathname === '/jingxuan' || pathname === '/jingxuan/';

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
          // 精選頁面（已移除分類 tab）
          <>
            <h3 className={styles.sectionTitle}>精選內容</h3>
            <p
              style={{
                color: '#71717a',
                fontSize: '0.9rem',
                paddingLeft: '0.5rem',
                lineHeight: '1.5',
              }}
            >
              所有精選內容一次顯示，包含穹頂樂、天頂視頻、千古文化等分類。
            </p>
          </>
        )}
      </div>
    </div>
  );
}
