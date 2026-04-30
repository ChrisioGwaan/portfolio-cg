/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  devIndicators: false,
  reactStrictMode: true,
};

module.exports = nextConfig;
