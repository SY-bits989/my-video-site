// app/not-found.tsx
export default function NotFound() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#09090b',
        color: '#f4f4f5',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '7rem', margin: '0 0 1rem 0', fontWeight: 700 }}>
        404
      </h1>
      <p style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>頁面不存在</p>
      <a
        href="/"
        style={{
          color: '#60a5fa',
          fontSize: '1.2rem',
          textDecoration: 'none',
          padding: '12px 24px',
          border: '1px solid #60a5fa',
          borderRadius: '12px',
        }}
      >
        ← 返回首頁
      </a>
    </div>
  );
}
