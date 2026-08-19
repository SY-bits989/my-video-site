// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* ==================== Hero ==================== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          {/* 改成影片 */}
          <video
            className={styles.heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* 如果有 webm 也可以加這行 */}
            {/* <source src="/hero-video.webm" type="video/webm" /> */}
          </video>

          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}></h1>
          </div>
        </div>
      </section>

      {/* ==================== 探索區塊（兩個大縮圖） ==================== */}
      <section className={styles.exploreSection}>
        <div className={styles.exploreGrid}>
          {/* 視頻 */}
          <Link href="/original" className={styles.exploreCard}>
            <div
              className={styles.exploreImage}
              style={{ backgroundImage: `url('/original-preview.jpg')` }}
            />
            <div className={styles.exploreOverlay}>
              <h2 className={styles.exploreTitle}>返本歸真</h2>
            </div>
          </Link>

          {/* 推薦 */}
          <Link href="/jingxuan" className={styles.exploreCard}>
            <div
              className={styles.exploreImage}
              style={{ backgroundImage: `url('/jingxuan-preview.jpg')` }}
            />
            <div className={styles.exploreOverlay}>
              <h2 className={styles.exploreTitle}>曠古稀世</h2>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}