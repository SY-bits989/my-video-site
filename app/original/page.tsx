'use client';

import { useState } from 'react';
import { originalVideos } from '../lib/data';

export default function OriginalPage() {
  const [currentVideo, setCurrentVideo] = useState(originalVideos[0]);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      {/* 上方大播放器 */}
      <div
        style={{
          maxWidth: '620px',
          margin: '0 auto 60px',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
        }}
      >
        <video
          key={currentVideo.id}
          controls
          autoPlay
          style={{ width: '100%', height: 'auto', display: 'block' }}
        >
          <source src={currentVideo.videoSrc} type="video/mp4" />
          您的瀏覽器不支援播放此視頻。
        </video>
      </div>

      {/* 下方縮圖列表 */}
      <div>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '30px',
            color: '#374151',
          }}
        >
          全部原創作品
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center', // 想置中就保留
            gap: '20px', // 改成 0（想要無縫貼合）
            padding: '0 10px',
            flexWrap: 'nowrap', // ← 關鍵：禁止換行
            width: '100%', // 或改成 'fit-content' / 'auto'
            maxWidth: '900px', // 可自行調整最大寬度
          }}
        >
          {originalVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setCurrentVideo(video)}
              style={{
                cursor: 'pointer',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow:
                  currentVideo.id === video.id
                    ? '0 0 0 3px #0022ff'
                    : '0 4px 12px rgba(63, 68, 32, 0.1)',
                transition: 'all 0.3s ease',
                width: '280px',
                maxWidth: '280px',
                flex: '0 0 280px',
              }}
            >
              {/* 正方形縮圖 */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>

              {/* 標題 */}
              <div
                style={{
                  padding: '10px',
                  backgroundColor: 'white',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontWeight: '600',
                    color: currentVideo.id === video.id ? '#001eff' : '#001eff',
                    fontSize: '18px',
                  }}
                >
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
