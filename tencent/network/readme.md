# 浏览器端的网络

最早的HTTP协议并不提供以下功能
浏览器与服务器间沟通方式
浏览器是一个exe 开发各种功能，来满足现代web服务的需求
如何去解析一个DOM
服务器推给你的都是  二进制流

2. 状态码 304
   服务器端资源未修改
   浏览器有缓存能力，可以为服务器端分忧（bs）
   HTTP协议从简单的基于请求响应应答模式，发展到要不要开发状态码？
 
    怎样了解一个你之前请求过得文件没有被修改呢？
    1. Browser 缓存了这个文件
    2. 服务器有这个文件
    3. 浏览器用自己本地的文件，但是服务器一旦更新了内容，重新请求
       lastModified ETag      
 
1. 腾讯级面试题
```
1. accept:  text/html
2. accept-encoding:gzip,deflate,br
3.accept-Charset:ISO-8859-1,utf-8
4. accept-language:zh-CN,zh
```

?  
http 头部 
1. 客户端期待服务器返回的html类型的文件
2. 服务器可以采用解压缩方式
3. 文件的编码
4. 中文首选

- HTTP是浏览器和服务器之间的通信语言，是互联网的基石
- 面试题会问：
- 即将完成使用的HTTP/1,正在走向我们的HTTP/2，面向未来的HTTP/3以及更加安全的https

- 一切静态支援都应该缓存，这是打开页面快速的主要原因
    1. 加速打开页面，最极致离线应用
    2. 服务器端省带宽，省去了IO操作  304+ ETag
    3.   /statSync可以返回文件的所有属性，包括改变的属性 mtime修改时间的，ctime 创建时间


HTTp 超文本传输协议 真的，最开始，他就传文本
## HTTP0.9 1991年  应答式最简单模型 
- HTTP基于TCP 七层协议 TCP 是下四层，经历三次握手
- 建立起连接后，TCP完后了，会发送一个请求行的信息 GET /index.html
- 服务器收到信息，读取对应的HTML文件，并将数据以ASCLL字符流返回客户端
- 传输完成后，断开连接

## HTTP/1.0
 1994 浏览器大战，网景和IE 之间的大战  IE 和Chrome大战 360
 支持多种类型的文件下载，请求头和响应头就被设计出来  图片

 - 浏览器要知道服务器返回的是什么数据类型，浏览器根据不同的数据类型
   做针对性处理
 - 由于传送的文件越来越多，服务器要压缩，gzip
 - 万维网全球化  zh-cn
 - 不同的编码格式 例如utf-8
 请求头
 - 服务器越来越忙 所以就可能产生无应答的情况，所以就有了状态码
 - Cache 机制也出来了，
 - user Agent 用户代理 区分不同的用户设备（安卓，苹果，PC）

## HTTP/1.1
1. 改进持久连接
HTTP/1.1中增加了持久连接的方法，它的特点是在一个TCP连接上可以
传输多个HTTP请，只要浏览器或者服务器没有明确的断开连接，那么该
TCP连接会一直保持。
同一个域名，我们会默认允许同时建立6个TCP持久连接
2. 不太成熟的HTTP管线化
需要等前面的请求返回之后，才能进行下一次请求，这是  队头阻塞
3. 对虚拟主机的支持
可以让一台服务器响应多个域名
Domain ->IP ->服务器+端口 -> 服务器端程序
HOST字段，用于区分不同 Domain 在同一台机器中调用不同的应用
4. Cookie ,安全机制

## HTTP/2.0
 管线优化，
 CSS sprite 雪碧图  不再提了  把很多的图片合到一张上去