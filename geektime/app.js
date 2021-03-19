const koa = require('koa')
const app = new koa()
const mount = require('koa-mount')
const  fs = require('fs')
//  console.log(app instanceof require('events').EventEmitter);
//使用一个中间件
app.use(
    // app 内存中
    // views/index.html 硬盘
    // 1. 导入内存  fs await  有点慢
    // 2. 发送
    mount('/',async(ctx)=>{
        ctx.body=fs.readFileSynca(__dirname+ '/views/index.htm','utf-8')
    })
)


app.listen(3000);