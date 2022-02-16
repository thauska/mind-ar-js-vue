module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          // a-frame components
          isCustomElement: tag => tag.startsWith('a-')
        }
      }))
  }
}
