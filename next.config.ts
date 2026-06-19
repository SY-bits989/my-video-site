import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',           // ← 新增這行
  images: {
    unoptimized: true,        // ← 新增這行（Cloudflare 需要）
  },
};

export default nextConfig;