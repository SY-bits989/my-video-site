// app/page.tsx
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* ==================== Hero ==================== */}
      <section className={styles.hero}>
        <div className={styles.heroImage}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>信仰大法</h1>
          </div>
        </div>
      </section>

      {/* ==================== 探索區塊（兩個大縮圖） ==================== */}
      <section className={styles.exploreSection}>
        <div className={styles.exploreGrid}>
          {/* 善圓 */}
          <Link href="/original" className={styles.exploreCard}>
            <div
              className={styles.exploreImage}
              style={{ backgroundImage: `url('/original-preview.jpg')` }}
            />
            <div className={styles.exploreOverlay}>
              <h2 className={styles.exploreTitle}>善圓</h2>
            </div>
          </Link>

          {/* 少壯 */}
          <Link href="/jingxuan" className={styles.exploreCard}>
            <div
              className={styles.exploreImage}
              style={{ backgroundImage: `url('/jingxuan-preview.jpg')` }}
            />
            <div className={styles.exploreOverlay}>
              <h2 className={styles.exploreTitle}>少壯</h2>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
