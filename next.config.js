/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75],
    formats: ['image/avif', 'image/webp'],
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
