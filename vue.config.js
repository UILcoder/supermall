module.exports={
  configureWebpack: {
    resolve: {
      alias: {
        "assets": '@/assets',
        "components": '@/components',
        "common": '@/common',
        "network": '@/network',
        'views':'@/views',
      }
    }
  },
   devServer: {
    proxy: {
      '/search': {
        target: 'https://list.mogu.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
