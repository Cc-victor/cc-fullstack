weui 让小程序更像原生微信的框架
比vant 小一些
2. 导航的自定义
3. 全局引入组件
 app.js app.wxss app.json
 4. 全局启用了下拉更新 onPulldownRefresh
  耗时操作 ，stop 模仿APP中下拉更新
  有点鲁莽 在页面启动， 列表 


  5. 图片都放images  会让程序变大，放到cdn下，云储存，云中地址，减少了代码包的体积

  6. color-ui 大法好，随心随性大法
  flex justify-center padding 
  text-white text-blue
  margin-tb-sm lg text-xl