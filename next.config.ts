import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gcee.ac.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
