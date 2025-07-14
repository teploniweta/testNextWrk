const isProd = process.env.NODE_ENV === 'production'

const repo = 'testNextWrk'
const assetPrefix = isProd ? `https://teploniweta.github.io/${repo}` : undefined
const basePath = isProd ? `/${repo}` : undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: isProd
    ? {
        loader: 'custom',
        loaderFile: './image-loader.js',
      }
    : {
        unoptimized: true,
      },
}

module.exports = nextConfig 