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
         正向代理就是网关告诉你你需要请求的数据在哪里
         反向代理就是网关把你需要的数据拖过来给你

    3. 状态短语

   响应常见 Header
   Data：服务器的时间
   Content-Type：响应体数据类型
   Set-Cookie：设置Cookie
   Server：后端服务器名


   HTTP1.0 VS HTTP1.1
   1.1 默认支持长连接
   增加了更多的响应和请求体
   加入了缓存机制 身份认证 状态管理
   1.1 加入 HOST

   HTTP2.0 VS HTTP1.0
   头部压缩 二进制传输
   服务端推送 
   多路复用 并行接受数据 更快

   HTTP和HTTPS的区别
   SSL HTTP未加密   HTTPS 加密了
   HTTPS 需要证书
   HTTP 在应用层  HTTPS 在传输层
   端口 HTTP端口号（80） HTTPS（443）
   HTTPS性能低于HTTP

   HTTPS的传输过程：
        客户端发送请求到服务端
        服务端返回数字证书
        客户端验证证书的有效性
        客户端解析并利用证书机构的公钥从证书中取出服务端的公钥
        客户端生成随机对称密钥（随机数），并利用公钥加密发送给服务端
        服务端用私钥解密取出对称密钥。
        双方采用对称加密的方式进行加密传输的http数据，收到后利用对称密钥解密
        这里省却了验证异常的过程，正常的连接大致就是这样。

        对称加密 AES DES SM4  
        加密算法：块式加密 把它一块一块的分组加密   流式加密 一点一点的加密
        非对称加密：性能非常低，数据量有限，一般是4K