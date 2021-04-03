# 跨域
  - 后端的跨域解决方案
  - JSONP json witn padding
    https://photo.sina.cn/aj/index?page=1&cate=recommend
    同源机制

1. 通过script \img (自带跨域能力)的 src 跨域 向sina 发送了请求 http
   规避js代码xhr  fetch 被同源机制管到 
   JSON JS 代码能够使用
2. &callback=callback
    sina 在页面上有一个callback 的函数 ，等待你的调用

3. callback({})  JSON+padding

xhr、fetch 因运行在沙箱中的js同源机制，无法请求请求跨域sina 资源
迂回到 使用script标签  有跨域访问资源的能力，http请求中带上&callback=callback 这个padding，
sina服务器就在json数据外面包一层callback函数，将这个带有padding的数据，可以在script得到后运行的函数，页面上已准备好这个函数，从而效果一样