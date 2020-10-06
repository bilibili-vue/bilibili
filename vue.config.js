/* webpack也是基于node开发的 ，用webpack在当前环境直接做做代理，不用node



*/
const path = require('path')
module.exports = {
    chainWebpack(config) {
      config.resolve.alias
        .set('@', path.resolve(__dirname, './src/'))
        .set('@c', path.resolve(__dirname, './src/components/'))
        .set('@u', path.resolve(__dirname, './src/utils'))
        .set('@v', path.resolve(__dirname, './src/views'))
        .set('@a', path.resolve(__dirname, './src/assets'))
    },
    devServer: {
      proxy: {
        '/proxyApi': {
          target: 'http://api.bilibili.cn',
          changeOrigin: true,
          pathRewrite: {
            '^/proxyApi': ''
          }
        },
      '/api': {
          target: 'http://www.bilibili.com',
          changeOrigin: true,
          pathRewrite: {
              '^/api': ''
            }
       },
       '/proxyApj': {
        target: 'https://api.bilibili.com',
        changeOrigin: true, 
        pathRewrite: {
          '^/proxyApj': ''
        }
         },
      }
    }
  }