//app的创建以及基本配置  中间件 面筋
// es6 module typescript=>=>js 
import express from 'express';
import postRouter from '../post/post.router';
const app= express();
const bodyParser = require('body-parser');
// app 处于市服状态 eventEmitter
//等
app.use(bodyParser.urlencoded());
// body 处理加中间件 bodyParser

// 中间件打理 函数
// 所有的路由都在这里汇总
app.use(  //函数
    // 文章模块的路由  存，改，查
    postRouter,
    // 用户路由
    // ...
)

export default app;