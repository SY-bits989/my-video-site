'use client';

import { Suspense } from 'react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="bg-zinc-950 text-white">
        <Suspense
          fallback={
            <div className="p-10 text-center text-zinc-400">載入中...</div>
          }
        >
          <div className="max-w-[1100px] mx-auto p-4 lg:p-8">{children}</div>
        </Suspense>
      </main>
    </div>
  );
}
