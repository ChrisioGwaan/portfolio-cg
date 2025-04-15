/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
  // devIndicators turn it off
  devIndicators: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
