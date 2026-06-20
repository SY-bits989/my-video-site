'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';

const tabs = [
  { id: 'zenith', label: '穹頂樂' },
  { id: 'top-video', label: '天頂視頻' },
  { id: 'audio', label: '妙音' },
  { id: 'culture', label: '千古文化' },
  { id: 'original', label: '善緣原創' },
  { id: 'others', label: '美味' },
];

export default function Navbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeTab = searchParams.get('tab') || 'zenith';

  const handleTabChange = (tabId: string) => {
    // 原創 Tab 直接跳到 /original
    if (tabId === 'original') {
      router.push('/original');
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tabId);
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1100px] mx-auto px-6">
        <h1 className="text-[28px] font-semibold text-center py-6 text-gray-900">
          善緣精選
        </h1>

        {/* 永遠顯示 Tab，不再隱藏 */}
        <nav className="flex justify-center flex-wrap gap-2 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`tab-btn px-6 py-3 text-[17px] font-medium transition-all rounded-full ${
                (pathname === '/original' && tab.id === 'original') ||
                (activeTab === tab.id && pathname !== '/original')
                  ? 'active bg-blue-600 text-white shadow-md'
                  : 'hover:text-blue-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
