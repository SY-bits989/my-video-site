// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ 
      padding: '120px 20px', 
      textAlign: 'center', 
      maxWidth: '600px', 
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '80px', margin: '0 0 16px 0', color: '#18228c' }}>404</h1>
      <h2>頁面不存在</h2>
      <p style={{ fontSize: '18px', color: '#555', margin: '24px 0 40px' }}>
        抱歉，您訪問的頁面不存在。
      </p>
      <Link 
        href="/"
        style={{
          display: 'inline-block',
          padding: '16px 40px',
          backgroundColor: '#18228c',
          color: 'white',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        返回首頁
      </Link>
    </div>
  );
}