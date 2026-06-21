'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  const isJingxuan =
    pathname === '/jingxuan' || pathname.startsWith('/jingxuan');
  const isOriginal =
    pathname === '/original' || pathname.startsWith('/original');

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo + 善緣文字 放在左上角 */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/logo.png"
            alt="善緣 Logo"
            width={88}
            height={88}
            loading="eager" // ← 新增這行
            priority // ← 新增這行（更重要）
            style={{
              borderRadius: '50%',
              backgroundColor: 'transparent',
            }}
          />
          <span className={styles.siteName}>善緣</span>
        </Link>

        <div className={styles.tabContainer}>
          <Link
            href="/jingxuan"
            className={`${styles.tab} ${isJingxuan ? styles.active : ''}`}
          >
            善緣精選
          </Link>

          <Link
            href="/original"
            className={`${styles.tab} ${isOriginal ? styles.active : ''}`}
          >
            善緣原創
          </Link>
        </div>
      </div>
    </nav>
  );
}
