# js 常考考点
要加一个用户怎么办？

es6/ 红宝书 你不知道的javascript leetcode 
单线程的语言 , 数据通信相关    vue/react 不学 
1. npm init -y  
2. npm i json-server
   来个命令行，怎么启动db.json后台数据源
   http server 3000/users db.json 作为数据源
   提供出访问 后台准备好了
   http get  http://localhost:3000/users users[]
   post 保存表单
3. db.json 数据文件
  json 是js前端和后端通信的数据文件
- promise  五星 异步
 "server:json":"json-server --watch --port 1234 db.json" 端口换成1234

- postman 可以来做http 访问代理
  POST 那是再方便不过

  - 前端 +后端
  live-server http 前端服务 index.html 8080
  json-server 后端数据 3000
  前端和后端要数据通信？
  前端去拉取后端的数据
  get 3000  /users
  post 3000 /users

- ajax 的表达一下
   JS 最重要的考点  XMLHttpRequest 对象
    1.是历史性的突破，带来前端请求主动请求数据的能力，微博Ajax应用
    前端更主动， ajax + DOM 页面变得丰富，动态
    2. http://localhost:3000/users 一切皆资源 Restfull
       数据资源 GET请求 请求动作 path /users []
       POST 新增的 /users {name:'王嘉欣'}
    3. XMLHttpRequest ActiveXObject("Microsoft.XMLHTTP")
    但是浏览器嗅探 if else
    let httpRequest ;  http 协议 是 基于求情返回的协议Reques Response
    - 创建好对象
    - .open('GET',http://localhost:3000/users,true)  打开一个请求通道
     .send() 这个请求真的发送了
     .onreadystatechange
     XMLHttpRequest 完成了
     JSON.(httpRequest.responseText) 返回的数据
     json 数组 -> html 数组 map `<li>${user.id}-${user.name}</li>` innerHTML (.join {字符串变字符})