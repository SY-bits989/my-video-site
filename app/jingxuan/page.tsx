// app/jingxuan/page.tsx
import Link from 'next/link';
import { videoData, type VideoItem } from '../lib/data';
import styles from './page.module.css';

const subCategories = [
  { id: 'qiongding', name: '穹頂樂', key: 'zenith' as const },
  { id: 'tianding', name: '天頂視頻', key: 'top-video' as const },
  { id: 'qiangu', name: '千古文化', key: 'culture' as const },
  { id: 'miaoyin', name: '妙音', key: 'audio' as const },
  { id: 'xuan', name: '玄', key: 'xuan' as const },
  { id: 'meishi', name: '養生', key: 'others' as const },
];

export default function JingxuanPage() {
  return (
    <div className={styles.page}>
      {/* 頂部導航 */}
      <div className={styles.topNav}>
        <Link href="/" className={styles.navButton}>
          ← 返回首頁
        </Link>
        <Link href="/original" className={styles.navButton}>
          前往視頻 →
        </Link>
      </div>

      <div className={styles.mainContent}>
        {subCategories.map((cat) => {
          const items = videoData[cat.key] as VideoItem[];

          if (!items || items.length === 0) return null;

          return (
            <section
              key={cat.id}
              id={cat.id}
              className={styles.categorySection}
            >
              <h2 className={styles.categoryTitle}>{cat.name}</h2>

              <div className={styles.list}>
                {items.map((item, index) => (
                  <div key={index} className={styles.listItem}>
                    {/* 標題 */}
                    <div className={styles.titleRow}>
                      {item.type === 'embed' ? (
                        <span className={styles.itemTitle}>{item.title}</span>
                      ) : (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.itemTitle}
                        >
                          {item.title}
                        </a>
                      )}
                    </div>

                    {/* 來源（很淡）— 只在 type === 'link' 時顯示 */}
                    {item.type === 'link' && item.author && (
                      <div className={styles.author}>{item.author}</div>
                    )}

                    {/* 嵌入影片 */}
                    {item.type === 'embed' && (
                      <div
                        className={styles.embedContainer}
                        dangerouslySetInnerHTML={{ __html: item.embedCode }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
