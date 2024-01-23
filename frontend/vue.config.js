const {defineConfig} = require('@vue/cli-service')

module.exports = defineConfig({
   transpileDependencies: true,
   devServer: {
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
