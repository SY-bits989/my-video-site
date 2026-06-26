/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 開啟靜態匯出
  trailingSlash: true,
  images: {
    unoptimized: true, // Cloudflare 需要
  },
};

export default nextConfig;
