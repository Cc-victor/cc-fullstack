// 让大象跳舞
//module 模块，node内置的模块化机制 commonjs module.exports +require
//es6 export default import
// webpack 升级处理静态资源 从传统小小作坊 -> 企业级开发
module.exports={
   entry:'./src/mian.js',
   output:{
       filename:'[name].js'
   },
   /*每一种类型的静态文件 代表某种资源，提供一种解决方案 */
   module:{
       rules:[
           {
               test:/\.css$/,
               use:['style-loader','css-loader']
           }
       ]
   }
}