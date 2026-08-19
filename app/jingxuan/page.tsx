// app/jingxuan/page.tsx
import Link from 'next/link';
import { jingxuanCategories } from '../lib/data';
import styles from './page.module.css';

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
        {/* ===== 穹頂樂影片（直接嵌入） ===== */}
        <section className={styles.featuredEmbed}>
          <h2 className={styles.featuredTitle}>交響樂</h2>
          <div className={styles.embedContainer}>
            <iframe
              width="100%"
              height="500"
              src="https://www.shenyuncreations.com/zh-TW/embed/_video_e606bd9dcdcc48739fa9ec4a71b090c5/Mongolian-Chopsticks---2023-Shen-Yun-Symphony-Orchestra?pid=p_BkqASChRSLaH"
              title="2023 神韻交響樂 《筷子舞》"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* ===== 5 個分類卡片 ===== */}
        <div className={styles.categoryGrid}>
          {jingxuanCategories.map((cat) => {
            // 對應 public 資料夾的圖片
            const imageMap: Record<string, string> = {
              tianding: '/tdsp.jpg',
              xuan: '/x.jpg',
              miaoyin: '/my.jpg',
            };

            return (
              <Link
                key={cat.id}
                href={`/jingxuan/${cat.id}`}
                className={styles.categoryCard}
              >
                <div
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url('${imageMap[cat.id]}')` }}
                />
                <div className={styles.categoryOverlay}>
                  <h2 className={styles.categoryCardTitle}>{cat.name}</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
