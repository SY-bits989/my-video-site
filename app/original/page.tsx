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

  // 未登入 → 顯示登入表單
if (!user) {
  return (
    <div className="max-w-[1100px] mx-auto px-6 py-12">
      <LoginForm 
        redirectToOriginal={true} 
        onLoginSuccess={() => {
          // 登入成功後重新檢查狀態
          window.location.reload();   // 最簡單可靠的方式
        }} 
      />
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
        <h2 className="text-2xl font-semibold mb-6">🌟 原創內容</h2>
        
        {/* 乾淨世界視頻嵌入 */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">最新原創影片</h3>
          <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.ganjingworld.com/embed/B6aMg3ADqN" 
              frameBorder="0" 
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
          </div>
        </div>

        <p className="text-gray-600 mt-8">
          更多優質原創影片與內容將持續更新，歡迎持續關注！
        </p>
      </div>
    </div>
  );
}