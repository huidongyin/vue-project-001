const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   productionSourceMap: false,
//   devServer: {
//     port: '8010',
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//     },
//     proxy: {
//       '/kms': {
//         target: 'https://www.baidu.com/',
//         changOrigin: true,
//         pathRewrite: {
//           '^/kms': ''
//         }
//       },
//       '/mq': {
//         target: 'https://www.sougou.com/',
//         changOrigin: true,
//         pathRewrite: {
//           '^/mq': ''
//         }
//       }
//     }
//   },
//   configureWebpack: webpackMergeConfig,
//   publicPath: '/kms'
// }