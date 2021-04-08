restful  的替代品
来自于Facebook 良心出品的查询方案 2015

json-server
缺点？
基于restful的概念，一切皆资源 
语义化的url + action 
db.json 资源中心
/results  list请求到了

数据库里 还是db.json 一起被查出来，select *
多好多我们不要的数据 ，select name,sex from user;
在这基础上，设计了graphql查询设计语言
 1. 你要什么设计查询方案，就得到什么
 2. 合并传统后端在哪些数据的时候要n张表进行查询，一次就够了

- 启动graphql
   1. express;
   2. 加入graphql 中间件 ，每次查询graphql 都会介入
      graphqlHTTP playground
   3. schema hero + rootValue 
      后面怎么定义scheme 就有了
   4. graphql 可以省去很多的请求浪费
   5. 前端可以自己决定用哪些字段

