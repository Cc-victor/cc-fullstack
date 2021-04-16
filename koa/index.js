const  koa = require('./lib/application')
const app = new koa()

app.use((ctx)=>{
   console.log(ctx.req.url)
   console.log(ctx.request.req.url)
   console.log(ctx.request.url)

})

app.listen(3000,()=>{
  console.log('服务启动了')
})

// let http = require('http')

// let server=http.createServer((req,res)=>{
//     res.end('Hello jak')
// })

// server.listen(4000)