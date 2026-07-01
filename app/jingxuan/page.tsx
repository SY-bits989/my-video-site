'use client';

import { useSearchParams } from 'next/navigation';
import { videoData, VideoItem } from '../lib/data';
import styles from './page.module.css';
import { Suspense } from 'react';

const subCategories = [
  { id: 'qiongding', name: '穹頂樂', key: 'zenith' as const },
  { id: 'tianding', name: '天頂視頻', key: 'top-video' as const },
  { id: 'qiangu', name: '千古文化', key: 'culture' as const },
  { id: 'miaoyin', name: '妙音', key: 'audio' as const },
  { id: 'xuan', name: '玄', key: 'xuan' as const },
  { id: 'meishi', name: '美味', key: 'others' as const },
] as const;

function JingxuanContent() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'qiongding';

  const currentCategory = subCategories.find((cat) => cat.id === activeTab);

  const currentData: VideoItem[] = currentCategory
    ? (videoData[currentCategory.key] as unknown as VideoItem[]) || []
    : [];

  return (
    <>
      {/* 手機版橫向 Tab */}
      <div className={styles.mobileTabs}>
        {subCategories.map((cat) => (
          <a
            key={cat.id}
            href={`/jingxuan?tab=${cat.id}`}
            className={`${styles.mobileTab} ${activeTab === cat.id ? styles.mobileTabActive : ''}`}
          >
            {cat.name}
          </a>
        ))}
      </div>

      {/* 內容區域 */}
      <div className={styles.contentArea}>
        {currentData.length > 0 ? (
          currentData.map((item, index) => (
            <div key={index} className={styles.itemCard}>
              {/* 小標籤 */}
              {item.category && (
                <div className={styles.categoryTag}>{item.category}</div>
              )}

              {/* 標題區域（垂直居中） */}
              <div className={styles.titleWrapper}>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.itemLink}
                  >
                    {item.title}
                  </a>
                )}
              </div>

              {/* 作者（移到標題下方） */}
              {item.author && (
                <div className={styles.authorCredit}>{item.author}</div>
              )}

              {/* 嵌入視頻 */}
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
    </>
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
