'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import LoginForm from '../login/LoginForm';   // ← 這裡引入獨立的 LoginForm

export default function OriginalContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div className="p-24 text-center text-lg">驗證中...</div>;
  }

  // 未登入 → 顯示美化後的登入表單
  if (!user) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <LoginForm redirectToOriginal={true} />
      </div>
    );
  }

  // 已登入 → 顯示原創內容
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          🌟 善緣精選 - 原創內容
        </h1>
        <button 
          onClick={async () => {
            await supabase.auth.signOut();
            router.refresh();
          }}
          className="px-6 py-2.5 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition"
        >
          登出
        </button>
      </div>
      
      <p className="mb-8 text-lg">歡迎回來，{user?.email}</p>
      
      <div className="bg-white border border-gray-100 rounded-3xl p-10">
        <h2 className="text-2xl font-semibold mb-4">原創內容區</h2>
        <p className="text-gray-600">這裡放置你的原創文章、影片、心得等內容。</p>
      </div>
    </div>
  );
}