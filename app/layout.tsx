import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import { Suspense } from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '善緣',
  description: '善緣精選 - 穹頂樂、天頂視頻、妙音、千古文化、善緣原創、美食',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <Suspense fallback={<div className="p-8 text-center">載入導航...</div>}>
          <Navbar />
        </Suspense>

        <Suspense fallback={<div className="p-12 text-center">載入中...</div>}>
          <main className="min-h-screen">{children}</main>
        </Suspense>

        <footer className="bg-gray-50 border-t py-12 text-center text-sm text-gray-500">
          <div className="max-w-[1100px] mx-auto px-6">
            &copy; 2026 善緣 • 部分資源來自網路，如有侵權請告知
          </div>
        </footer>
      </body>
    </html>
  );
}
