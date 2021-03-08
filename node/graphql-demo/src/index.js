const express = require('express');
//引入Apollo
const { ApolloServer,gql} = require('apollo-server-express');
const { graphql } = require('graphql');
const app =express();
//防止端口冲突
const port = process.env.PORT || 4000;
//middlewares
app.get('/',(req,res)=>{
    //express 不知道用什么编码给用户
    //npm run dev -> process.env.PORT执行空间  ->  运行前
    res.set({
        'Content-Type':'text/html;charset=utf-8'
    })
    //响应用户的请求，返回res -> 响应头()  -> 内容
   res.end('<h1>您好</h1>')
})
//graphql 服务，API服务的新形式
//GET  /api/posts  定义URL
const typeDefs = gql`
    type Query {
       hello:String
    }
`
//graphql 定义了查询的新语言  模型定义
//具体的查找
// 学完   ts+React+graphql+koa  简历写一下
const resolvers={
    Query:{
        hello:() => `Hello world`
    }
}
const server = new ApolloServer({typeDefs,resolvers});
server.applyMiddleware({//api  graphql 交互页面
    app,  //给当前app 添加了一个中间件
    path:'/api' // 提供API服务 api 开发 /api/posts Restful
})


app.listen(port,)