计算机网络复习



URI 格式
[协议名]://[用户名]:[密码]@[主机名]:[端口]/[路径]?[查询参数]#[片段ID]

mysql://root:123456@localhost:3306/student_db?max_connection=50

URL格式
[协议名]://[主机名]:[端口]/[路径]?[查询参数]#[片段ID]

https://www.baidu.com:443/info?query=如何xxxx#wei


HTTP的工作流程（客户端和服务端是如何通信的）
1. 服务端要监听80（http）或443（HTTPS）端口
2. 客户端向服务端发送连接请求，如果是HTTPS，会传输证书，验证请求
3. 双方建立TCP连接（三次握手）
4. 客户端向服务端发送请求，
5. 服务端响应请求，返回数据包
6. 关闭 TCP连接（四次挥手）
   
   请求报文的请求行由三部分组成：
   1. 请求方法 
     GET 用于读取URL内的参数信息，查询
     POST 添加数据，请求参数写在请求体里
     PUT 用于更新数据
     PATCH 用于更新部分数据，补丁
     DELETE 删除
     HEAD 请求读取头部信息
     OPTIONS 跨域请求用
   2. URL
   3. 协议版本
   
   首部行常用的 Header
   User-Agent：浏览器的版本
   Content-Type：请求体数据类型  text/plain text/html application/json
   Content-Length:请求体的长度，单位：字节
   Content-Encoding:告诉对方我方接受的编码格式
   Referer:请求来源
   Cache-Control:缓存机制
      meta http-equiv="Cache-Control"content="max-age=7200"
      meta http-equiv="expires"content="someGMT"
   HOST:主机名

   响应报文状态行组成
    1. 协议版本
    2. 状态码
       - 1** 请求收到，继续
       - 2** 成功
          200 成功
          201 请求成功且服务器创建了新的资源
          204 成功但不返回信息

       - 3** 需要进一步处理
          302 重定向
          304 文件没有发生变化

       - 4** 请求包含错误，服务器拒绝
         400 请求错误
         401 未授权访问
         403 禁止访问
         404 路径找不到
         405 请求方法不被允许  

       - 5** 服务器出现错误，但请求有效
         500 内部服务器错误
         502 网关错误（网关就是ngnix）
         503 服务不可用
         504 网关超时
         505 服务器不支持请求中的HTTP版本

    3. 状态短语