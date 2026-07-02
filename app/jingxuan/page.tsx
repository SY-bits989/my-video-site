'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { videoData, VideoItem } from '../lib/data';
import styles from './page.module.css';

const categoryMap: Record<string, keyof typeof videoData> = {
  qiongding: 'zenith',
  tianding: 'top-video',
  qiangu: 'culture',
  miaoyin: 'audio',
  xuan: 'xuan',
  meishi: 'others',
};

function JingxuanContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'qiongding';
  const dataKey = categoryMap[activeTab] || 'zenith';

  const currentData: VideoItem[] =
    (videoData[dataKey] as unknown as VideoItem[]) || [];

  return (
    <div className={styles.contentArea}>
      {currentData.length > 0 ? (
        currentData.map((item, index) => (
          <div
            key={index}
            className={`${styles.itemCard} ${item.embedCode ? styles.embedItem : ''}`}
          >
            {item.category && (
              <div className={styles.categoryTag}>{item.category}</div>
            )}

            <div className={styles.titleWrapper}>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemLink}
                >
                  {item.title}
                </a>
              ) : (
                <span className={styles.itemLink}>{item.title}</span>
              )}
            </div>

            {item.author && (
              <div className={styles.authorCredit}>{item.author}</div>
            )}

            {item.embedCode && (
              <div
                className={styles.embedContainer}
                dangerouslySetInnerHTML={{ __html: item.embedCode }}
              />
            )}
          </div>
        ))
      ) : (
        <p className={styles.empty}>此分類暫無內容</p>
      )}
    </div>
  );
}

export default function JingxuanPage() {
  return (
    <div className={styles.mainContent}>
      <Suspense
        fallback={
          <div className={styles.contentArea}>
            <p
              style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                color: '#71717a',
              }}
            >
              載入中...
            </p>
          </div>
        }
      >
        <JingxuanContent />
      </Suspense>
    </div>
  );
}
