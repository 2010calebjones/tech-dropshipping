import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ae-s1.alicdn.com',
      },
      {
        protocol: 'https',
        hostname: '**.aliexpress.com',
      },
    ],
  },
};

export default nextConfig;
