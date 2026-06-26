// app/jingxuan/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { videoData, VideoItem } from '../lib/data';
import styles from './page.module.css';

const subCategories = [
  { id: 'qiongding', name: '穹頂樂', key: 'zenith' as const },
  { id: 'tianding', name: '天頂視頻', key: 'top-video' as const },
  { id: 'qiangu', name: '千古文化', key: 'culture' as const },
  { id: 'miaoyin', name: '妙音', key: 'audio' as const },
  { id: 'xuan', name: '玄', key: 'xuan' as const },
  { id: 'meishi', name: '美味', key: 'others' as const },
] as const;

export default function JingxuanPage() {
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'qiongding';

  const currentCategory = subCategories.find((cat) => cat.id === activeTab);

  // 解決 readonly 轉換問題
  const currentData: VideoItem[] = currentCategory
    ? [...(videoData[currentCategory.key] || [])]
    : [];

  return (
    <div className={styles.mainContent}>
      <h1 className={styles.mainTitle}>{currentCategory?.name || '精選'}</h1>

      <div className={styles.contentArea}>
        {currentData.length > 0 ? (
          currentData.map((item, index) => (
            <div key={index} className={styles.itemCard}>
              {'url' in item && item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.itemLink}
                >
                  {item.title}
                </a>
              )}

              {'desc' in item && item.desc && (
                <p className={styles.desc}>{item.desc}</p>
              )}

              {'embedCode' in item && item.embedCode && (
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
    </div>
  );
}
