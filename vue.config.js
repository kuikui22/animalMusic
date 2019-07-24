const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  chainWebpack: (config)=>{
    //修改文件引入自定义路径
    config.resolve.alias
        .set('@', resolve('src'))
        .set('_assets', resolve('src/assets'))
        .set('_components', resolve('src/components'))
  },  
  devServer: {
      host: '0.0.0.0',
      port: '8080',
    }
}