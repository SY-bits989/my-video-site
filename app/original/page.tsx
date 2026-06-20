'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';
import LoginForm from '../login/LoginForm';

export default function OriginalContent() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

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

  if (loading) {
    return <div className="p-24 text-center text-lg">驗證中...</div>;
  }

  if (!user) {
    return (
      <div className="max-w-[1100px] mx-auto px-6 py-12">
        <LoginForm
          redirectToOriginal={true}
          onLoginSuccess={() => window.location.reload()}
        />
      </div>
    );
  }

  const displayName = user?.email?.split('@')[0] || '用戶';

  return (
    <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '48px 24px' }}>
      {/* 頂部資訊列 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: '50px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <span style={{ fontSize: '18px', color: '#374151' }}>
            你好，
            <span style={{ fontWeight: '600', color: '#2563eb' }}>
              {displayName}
            </span>
          </span>

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.refresh();
            }}
            style={{
              padding: '10px 26px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              backgroundColor: '#f3f4f6',
              border: 'none',
              borderRadius: '9999px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#dbdef5';
              e.currentTarget.style.color = '#0026ff';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.color = '#374151';
            }}
          >
            登出
          </button>
        </div>
      </div>

      {/* 視頻區域 */}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <video
          width="100%"
          height="auto"
          controls
          autoPlay
          loop
          muted
          playsInline
          style={{
            borderRadius: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            background: '#000',
            width: '100%',
            display: 'block',
          }}
        >
          <source src="/videos/compressed.mp4" type="video/mp4" />
          您的瀏覽器不支援影片播放。
        </video>
      </div>
    </div>
  );
}
