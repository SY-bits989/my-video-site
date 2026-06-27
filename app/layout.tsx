// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Sidebar from './components/layout/Sidebar';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: '善緣',
  description: '善緣',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-zinc-950 text-white">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-[320px] bg-zinc-950">
            <Suspense
              fallback={
                <div
                  style={{
                    padding: '3rem',
                    textAlign: 'center',
                    color: '#888',
                  }}
                >
                  載入中...
                </div>
              }
            >
              <div className="p-6 lg:p-8 max-w-[1100px]">{children}</div>
            </Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
