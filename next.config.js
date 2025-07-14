/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/testNextWrk',
  assetPrefix: '/testNextWrk',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 