const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
   transpileDependencies: true,
   devServer: {
      public: '0.0.0.0:8080',
      allowedHosts: 'all',
      client: {
         webSocketURL: 'auto://0.0.0.0:0/ws',
      },
   },
   pluginOptions: {
      moment: {
         locales: [''],
      },
   },
})
