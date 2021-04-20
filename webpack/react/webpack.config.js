// 配置一下 完成 src/index.js -> dist/main.js 让项目运行起来
const path =require('path');
//console.log(__dirname)  //node 超级变量 当前项目的绝对路径
// path.resolve 返回一个路径
//console.log(path.resolve(__dirname,'dist'))

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'dist')
    },
    /**一个个模块区打理 js babel await
     * css styl -> css
     * image
     */
    module: {
        rules: [
          {  
              test: /\.jsx?$/, 
            use: { /**使用什么来处理这个模块 生产流车间 */
                // -D devDependencies 开发时依赖
                loader:'babel-loader',
                options:{
                    /**babel-loader的配置 预处理
                     * let var js es6 -> es5
                     */
                  presets:['@babel/preset-env','@babel/preset-react']
                }
            }
        },
        // {
        //     test:/\.styl$/,
        //     use:{
        //         loader:'stylus-loader'
        //     }
        // }
    
    ]    
  }     
}