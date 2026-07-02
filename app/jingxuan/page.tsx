import { videoData, VideoItem } from '../lib/data';
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
    <div className={styles.mainContent}>
      {subCategories.map((cat) => {
        // 修正重點：使用 as unknown as 再轉一次
        const items = (videoData[cat.key] as unknown as VideoItem[]) || [];

        if (items.length === 0) return null;

        return (
          <div key={cat.id} style={{ marginBottom: '3rem' }}>
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
              {items.map((item, index) => (
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
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
