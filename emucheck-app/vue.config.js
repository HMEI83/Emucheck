// 引入等比适配插件
const px2rem = require('postcss-px2rem');
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
});

module.exports = {
  publicPath: './',
  outputDir: 'dist', // 打包后生成的文件夹名称
  assetsDir: 'static', // 放置静态资源的目录
  indexPath: 'index.html', // html的输出路径
  productionSourceMap: false, // 忽略打包后出现的.map文件
  // 构建多页面应用，页面的配置
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Metawars',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  lintOnSave: true,
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      },
      postcss: {
        plugins: [
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          require('postcss-plugin-px2rem')({
            // rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            // propBlackList: [], //黑名单
            // exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [], //要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
          postcss
        ]
      }
    }
  },
  // devServer:{type:Object} 3个属性host,port,https
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    https: true,
    // proxy: {
    //   '/api': {
    //     // target: 'http://192.168.101.96:28105',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //   }
    // },  // 配置多个代理

  },
  chainWebpack: () => {

  }

}
