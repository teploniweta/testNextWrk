const repo = 'testNextWrk'
const assetPrefix = `https://teploniweta.github.io/${repo}`
const basePath = `/${repo}`

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath,
  trailingSlash: true,
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
}

module.exports = nextConfig 