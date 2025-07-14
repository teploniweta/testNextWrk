'use strict'

export default function githubImageLoader({ src, width, quality }) {
  const assetPrefix = 'https://teploniweta.github.io/testNextWrk'
  return `${assetPrefix}${src}`
} 