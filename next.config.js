/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/testNextWrk',
  assetPrefix: '/testNextWrk',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 