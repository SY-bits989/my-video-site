'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function LoginForm({ redirectToOriginal = false }: { redirectToOriginal?: boolean }) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push(redirectToOriginal ? '/original' : '/');
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('註冊成功！請檢查信箱完成驗證。');
      }
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '420px', margin: '0 auto', padding: '80px 20px' }}>
      {/* 標題 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'linear-gradient(135deg, #1e40af, #4f46e5)', 
          borderRadius: '20px',
          margin: '0 auto 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 15px -3px rgba(30, 64, 175, 0.3)'
        }}>
          <span style={{ fontSize: '36px' }}>🎞️</span>
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: '600', color: '#111' }}>登入善緣原創</h2>
        <p style={{ color: '#666', marginTop: '8px', fontSize: '17px' }}>原創內容需登入後查看</p>
      </div>

      <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {/* 電子郵件 */}
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: '18px',
              border: 'none',
              borderBottom: '2px solid #e5e7eb',
              background: 'transparent',
              outline: 'none',
            }}
            placeholder="電子郵件地址"
          />
        </div>

        {/* 密碼 */}
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '12px 0',
              fontSize: '18px',
              border: 'none',
              borderBottom: '2px solid #e5e7eb',
              background: 'transparent',
              outline: 'none',
            }}
            placeholder="密碼"
          />
        </div>

        {/* 登入按鈕 */}
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '18px 0',
            fontSize: '18px',
            fontWeight: '600',
            color: 'white',
            background: 'linear-gradient(135deg, #1e40af, #4f46e5)',
            border: 'none',
            borderRadius: '9999px',
            boxShadow: '0 10px 15px -3px rgba(30, 64, 175, 0.4)',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.2s ease',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? '登入中...' : (isLogin ? '登入' : '註冊')}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={() => setIsLogin(!isLogin)}
          style={{ color: '#1e40af', fontSize: '16px', fontWeight: '500', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {isLogin ? '還沒有帳號？立即註冊' : '已有帳號？返回登入'}
        </button>
      </div>

      {message && (
        <div style={{ marginTop: '30px', padding: '16px', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '12px', textAlign: 'center' }}>
          {message}
        </div>
      )}
    </div>
  );
}