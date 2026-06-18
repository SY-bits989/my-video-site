'use client';

import { useState, useEffect, Suspense } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter, useSearchParams } from 'next/navigation';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || 'top-video';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        if (redirect === 'original') {
          router.push('/?tab=original');
        } else {
          router.push('/');
        }
      } else {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMessage('註冊成功！請去信箱確認驗證信。');
      }
    } catch (error: any) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px' }}>
      <h1>{isLogin ? '登入' : '註冊'}</h1>
      
      <form onSubmit={handleAuth}>
        <input
          type="email"
          placeholder="電子郵件"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '6px' }}
        />
        <input
          type="password"
          placeholder="密碼"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: '100%', padding: '12px', margin: '10px 0', borderRadius: '6px' }}
        />
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ 
            width: '100%', 
            padding: '14px', 
            margin: '15px 0',
            backgroundColor: '#18228c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px'
          }}
        >
          {loading ? '處理中...' : (isLogin ? '登入' : '註冊')}
        </button>
      </form>

      <p 
        onClick={() => setIsLogin(!isLogin)}
        style={{ cursor: 'pointer', color: '#18228c', textAlign: 'center', marginTop: '10px' }}
      >
        {isLogin ? '還沒有帳號？去註冊' : '已有帳號？去登入'}
      </p>

      {message && <p style={{ textAlign: 'center', marginTop: '15px', color: 'red' }}>{message}</p>}
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div style={{ padding: '100px', textAlign: 'center' }}>載入中...</div>}>
      <LoginForm />
    </Suspense>
  );
}