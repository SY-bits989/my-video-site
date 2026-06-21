import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #ffffff, #fffdbf)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      {/* 進入按鈕 */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      ></div>
    </div>
  );
}
