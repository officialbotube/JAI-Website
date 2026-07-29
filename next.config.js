/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Useful for static export and simpler deployments
  },
};

module.exports = nextConfig;
