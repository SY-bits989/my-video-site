'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { videoData } from './lib/data';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get('tab') || 'top-video';

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (activeTab === 'original' && !user && !loading) {
      router.push('/login?redirect=original');
    }
  }, [activeTab, user, loading, router]);

  const items = videoData[activeTab as keyof typeof videoData] || [];

  if (loading) return <div className="text-center py-20">載入中...</div>;

  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      {user && (
        <div className="mb-6 text-right">
          <span>已登入：{user.email}</span>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = '/';
            }}
            className="ml-4 text-sm text-red-600 hover:underline"
          >
            登出
          </button>
        </div>
      )}

      <div className="content">
        {activeTab === 'original' && !user ? (
          <div className="text-center py-20">
            <h2 className="text-2xl">此內容需要登入後才能查看</h2>
            <button
              onClick={() => router.push('/login')}
              className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg"
            >
              前往登入
            </button>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl text-gray-500">此分類暫無內容，敬請期待</h2>
          </div>
        ) : (
          <div className="links-grid grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className="link-item border-b border-gray-200 pb-8 last:border-none"
              >
                {item.type === 'embed' && item.embedCode ? (
                  <>
                    <h3 className="text-[19px] font-medium mb-4">
                      {item.title}
                    </h3>
                    <div
                      className="my-4"
                      dangerouslySetInnerHTML={{ __html: item.embedCode }}
                    />
                  </>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[19px] leading-tight hover:text-blue-600 hover:pl-3 transition-all block"
                  >
                    {item.title}
                  </a>
                )}

                {item.desc && (
                  <p className="mt-3 text-gray-600 text-[15px]">{item.desc}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
