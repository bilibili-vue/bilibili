
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
