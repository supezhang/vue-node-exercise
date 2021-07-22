module.exports ={
  configureWebpack:{
    resolve:{
      extensions:[],
      alias:{
        '@':'src',
        'assets':'@/assets',
        'common':"@/common",
        'network':'@/newtwork',
        'components':'@components',
        'views':'@/views'
      }
    }
  }
}