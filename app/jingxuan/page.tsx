'use client';

import { useState } from 'react';
import { videoData } from '../lib/data';

const subCategories = [
  { id: 'qiongding', name: '穹頂樂', key: 'zenith' as const, icon: '' },
  { id: 'tianding', name: '天頂視頻', key: 'top-video' as const, icon: '' },
  { id: 'miaoyin', name: '妙音', key: 'audio' as const, icon: '' },
  { id: 'qiangu', name: '千古文化', key: 'culture' as const, icon: '' },
  { id: 'meishi', name: '美食', key: 'others' as const, icon: '' },
];

export default function JingxuanPage() {
  const [activeTab, setActiveTab] = useState('qiongding');

  const currentCategory = subCategories.find((cat) => cat.id === activeTab);
  const currentData = currentCategory
    ? videoData[currentCategory.key] || []
    : [];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
      {/* 第二層 Tab */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '50px',
          paddingBottom: '20px',
          borderBottom: '2px solid #e5e7eb',
        }}
      >
        {subCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            style={{
              padding: '16px 28px',
              fontSize: '18px',
              fontWeight: '500',
              borderRadius: '9999px',
              border: '2px solid #ffffff',
              backgroundColor: activeTab === cat.id ? '#001eff' : 'white',
              color: activeTab === cat.id ? 'yellow' : '#001eff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '24px' }}>{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* 內容展示區 */}
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '40px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        }}
      >
        {/* 移除重複標題，只保留上方 Tab 提示 */}
        <div style={{ height: '20px' }}></div>

        <div
          style={{
            display: 'grid',
            gap: '28px',
            gridTemplateColumns:
              currentCategory?.id === 'qiongding'
                ? '1fr'
                : 'repeat(auto-fit, minmax(480px, 1fr))',
          }}
        >
          {currentData.length > 0 ? (
            currentData.map((item, index) => {
              const isZenith = currentCategory?.id === 'qiongding';

              return (
                <div
                  key={index}
                  style={{
                    ...(isZenith
                      ? {
                          border: '1px solid #e5e7eb',
                          borderRadius: '12px',
                          padding: '24px',
                          backgroundColor: '#fafafa',
                        }
                      : {}),
                  }}
                >
                  {/* 可點擊的標題 */}
                  {item.url && !item.embedCode ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: '20px',
                        fontWeight: '600',
                        color: '#0320ff',
                        textDecoration: 'none',
                        display: 'block',
                        marginBottom: isZenith ? '8px' : '4px',
                        lineHeight: '1.4',
                        transition: 'color 0.2s ease', // 新增：顏色過渡更順暢
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.textDecoration = 'underline';
                        e.currentTarget.style.color = '#facc15'; // 懸停時變黃色
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.textDecoration = 'none';
                        e.currentTarget.style.color = '#0320ff'; // 離開後恢復藍色
                      }}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h3
                      style={{
                        margin: '0 0 12px 0',
                        color: '#001dfb',
                        fontSize: '20px',
                        fontWeight: '600',
                      }}
                    >
                      {item.title}
                    </h3>
                  )}

                  {item.desc && (
                    <p
                      style={{
                        color: '#666',
                        marginBottom: '16px',
                        lineHeight: '1.6',
                      }}
                    >
                      {item.desc}
                    </p>
                  )}

                  {/* embed 內容（穹頂樂專用） */}
                  {item.embedCode && (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.embedCode }}
                      style={{ marginTop: '16px' }}
                    />
                  )}
                </div>
              );
            })
          ) : (
            <p
              style={{
                textAlign: 'center',
                color: '#888',
                fontSize: '18px',
                padding: '60px 0',
              }}
            >
              此分類暫無內容
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
