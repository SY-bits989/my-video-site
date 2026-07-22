// app/jingxuan/[category]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { videoData, jingxuanCategories, type VideoItem } from '../../lib/data';
import styles from '../page.module.css';

// 靜態匯出必須有這個
export function generateStaticParams() {
  return jingxuanCategories.map((cat) => ({
    category: cat.id,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params; // Next.js 15/16 必須 await

  const cat = jingxuanCategories.find((c) => c.id === category);
  if (!cat) notFound();

  const items = (videoData[cat.key] as VideoItem[]) || [];

  return (
    <div className={styles.page}>
      <div className={styles.topNav}>
        <Link href="/jingxuan" className={styles.navButton}>
          ← 返回分類
        </Link>
        <Link href="/original" className={styles.navButton}>
          前往視頻 →
        </Link>
      </div>

      <div className={styles.mainContent}>
        <h1 className={styles.categoryTitle}>{cat.name}</h1>

        {items.length === 0 ? (
          <p className={styles.empty}>此分類目前沒有內容</p>
        ) : (
          <div className={styles.list}>
            {items.map((item, index) => (
              <div key={index} className={styles.listItem}>
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

                {item.type === 'link' && item.author && (
                  <div className={styles.author}>{item.author}</div>
                )}

                {item.type === 'embed' && (
                  <div
                    className={styles.embedContainer}
                    dangerouslySetInnerHTML={{ __html: item.embedCode }}
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
