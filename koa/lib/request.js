// 为什么koa里面没有req  
let url = require('url')
let request ={
    //ctx.url = ctx.request.url 
    get url() {  //函数前面加个get ，就是调用时直接写url,不用加括号
        console.log(this)
        return this.req.url
    },
    get path(){
        return url.parse(this.req.url).pathname
    }

}

module.exports = request 