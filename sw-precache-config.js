module.exports = {
    stripPrefix: 'build/',
    staticFileGlobs: [
      'build/*.html',
      'build/site.manifest',
      'build/static/**/!(*map*)',
      'build/images/cards/*.svg'
    ],
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    swFilePath: 'build/service-worker.js'
};