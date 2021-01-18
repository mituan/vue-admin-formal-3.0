const path = require('path')

module.exports = {
  // 打包路径配置
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 构建项目生成的目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devDist',
  //关闭语法的自动检测
  lintOnSave: false,
  // webpack 打包的配置
  configureWebpack: {
    performance: {
      hints: false
    }
  },
  // webpack 原始配置的上层抽象，使其可以定义具名的 loader 规则和具名插件，
  //并有机会在后期进入这些规则并对它们的选项进行修改。
  chainWebpack: config => {
    //svg 配置
    config.module.rules.delete("svg"); //重点：删除默认配置中处理 svg
    config.module.rule('svg-sprite-loader').test(/\.svg$/)
      .include 
      .add(path.resolve('./src/assets/svg')) //处理 svg 保存路径
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'  //给 symbo 配置 id
      })
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./src/styles/main.scss";` //全局scss样式
      },
    }
  }

}