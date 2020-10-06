const { default: Axios } = require('axios')
const path = require('path')


module.exports={
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
            }
        }
    }
}