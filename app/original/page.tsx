'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function OriginalContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        router.push('/login');
        return;
      }
      
      setUser(user);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div style={{ padding: '100px', textAlign: 'center' }}>驗證中...</div>;
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>🌟 善緣精選 - 原創內容</h1>
        <button 
          onClick={async () => {
            await supabase.auth.signOut();
            router.push('/login');
          }}
          style={{ padding: '8px 16px' }}
        >
          登出
        </button>
      </div>
      
      <p>歡迎，{user?.email}</p>
      
      <div style={{ marginTop: '40px' }}>
        <h2>原創內容區</h2>
        <p>這裡放置你的原創文章、影片、心得等內容。</p>
        {/* 之後放你的原創內容 */}
      </div>
    </div>
  );
}