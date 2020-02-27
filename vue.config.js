const pkg = require('./package.json')
const path = require('path')
const apiMocker = require('webpack-api-mocker')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `//static.ws.126.net/163/f2e/${pkg.channel}/${pkg.name}` : '',
  productionSourceMap: false,
  assetsDir: 'resource',
  // chainWebpack: config => {
  //   config.module
  //     // .rule('images')
  //     // .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
  //     // .use('tinify-loader')
  //     //   .loader('tinify-loader')
  //     //   .tap(() => {
  //     //     return {
  //     //       apikey: 'ai3NQ23wq2pbQvy2JNylfuQMNJ99YAOZ',
  //     //       cache: path.resolve('node_modules/.cache/tinify-loader')
  //     //     }
  //     //   })
  //     // .end()
  // },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].minify = false;
      return args;
    });
  },
  devServer: {
    disableHostCheck: true,
    hot: true,
    // port: 8080,
    before (app) {
      apiMocker(app, path.resolve('./mock/index.js'))
    }
  },
  pwa: {
    iconPaths: {
      favicon32: 'resource/static/share-icon.png',
      favicon16: 'resource/static/share-icon.png',
      appleTouchIcon: 'resource/static/share-icon.png',
      maskIcon: 'resource/static/share-icon.png',
      msTileImage: 'resource/static/share-icon.png'
    }
  }
}
