#  云开发  最新的技术方案 serverless  不需要服务器


- 静态网站，
想做一个网站  上线
   127.0.0.1   localhost
     IP  就是买服务器的原因
     没有服务器怎么办？
     git 静态服务器

想让静态网站上线
首先
  - npm i -g serverless
     无服务器，
     添加serverless.yaml
     yaml 配置文件

  - serverless 全栈项目
     tencent 模板
     1. serverless init fullstack --name=myblog
     2. npm run bootstrap
         - api 后端项目  express
         - frontend 前端 vue
         - db 数据库
     3. serverless deploy