const express =require('express');
const app =express();
//这是什么？ process node 的内置的对象 进程 前端的window
//进程里，运行环境 env PORT 端口
// 如何从env 中拿到PORT   设置  ，默认4000
console.log(process.env.PORT,'____');
const port = process.env.PORT || 4000;

app.get('/', (req, res) => res.send("hello world,燕杰大佬"))

app.listen(port,()=>console.log(`listen on port ${port}!`))