'use strict'

module.exports = ({ src, width, quality }) => {
  const isProd = process.env.NODE_ENV === 'production'
  const assetPrefix = 'https://teploniweta.github.io/testNextWrk'
  
  if (isProd) {
    return `${assetPrefix}${src}`
  }
  
  return src
} 