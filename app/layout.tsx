// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  title: '善圓',
  description: '善圓',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW">
      <body className="bg-zinc-950 text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
