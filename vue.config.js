/* webpack也是基于node开发的 ，用webpack在当前环境直接做做代理，不用node



*/

module.exports = {
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