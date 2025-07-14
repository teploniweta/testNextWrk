'use strict'

module.exports = ({ src }) => {
  const assetPrefix = 'https://teploniweta.github.io/testNextWrk'
  // src будет иметь вид /images/foo.png, поэтому мы просто добавляем префикс.
  return `${assetPrefix}${src}`
} 