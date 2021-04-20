// 与 parcel 的不同，配置繁琐
//npm run buildwebpack --mode=development
//一定会去根目录下找到 webpack.config.js 配置文件
// module 是 node 中的 模块化文件 commonjs module.exports
// import export  es6 的模块化
module.exports = {
    entry: './main.js', //入口
    output: {  //出口
      filename: 'bundle.js'
    }
  }