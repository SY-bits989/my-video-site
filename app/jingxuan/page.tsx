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
  { id: 'meishi', name: '美味', key: 'others' as const },
];

export default function JingxuanPage() {
  return (
    <div>
      {/* 頂部導航按鈕 */}
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

          if (items.length === 0) return null;

          return (
            <div key={cat.id} id={cat.id} style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  color: '#f5c36a',
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  paddingLeft: '0.5rem',
                }}
              >
                {cat.name}
              </h2>

              <div className={styles.contentArea}>
                {items.map((item, index) => {
                  if (item.type === 'embed') {
                    return (
                      <div
                        key={index}
                        className={`${styles.itemCard} ${styles.embedItem}`}
                      >
                        <div className={styles.titleWrapper}>
                          <span className={styles.itemLink}>{item.title}</span>
                        </div>

                        <div
                          className={styles.embedContainer}
                          dangerouslySetInnerHTML={{ __html: item.embedCode }}
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div key={index} className={styles.itemCard}>
                        {item.category && (
                          <div className={styles.categoryTag}>
                            {item.category}
                          </div>
                        )}

                        <div className={styles.titleWrapper}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.itemLink}
                          >
                            {item.title}
                          </a>
                        </div>

                        {item.author && (
                          <div className={styles.authorCredit}>
                            {item.author}
                          </div>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
