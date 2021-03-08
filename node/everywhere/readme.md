1. nodemon 让我们的node支持热更新
2. 如何不写死端口号，可以让我们运行时，环境得到呢？
   设置一下
   cross-env  可以帮我们跨平台， window Mac linux
   的process.env 有兼容性问题
   PORT=123 SET  PORT=1234 系统变量