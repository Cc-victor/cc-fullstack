# 电商小程序开发
  前端

- 前端框架 vant 
  1. npm i @vant/weapp -S --production 
  来自有赞， 微信生态得为长
  2. npm init -y 
  安装第三方插件 
  3. 构建
  miniprogram_npm 
  @vant/weapp/button/index

- api在哪里？
  商品列表 
  apifm-wxapi 提供数据 
  

- 电商项目的感觉
  搜索栏 
  导航栏
  banners 
  推荐 
  商品列表

- 总结一下搜索体验  把自己当小白
  placeholder + padding-left + bindinput + bindConfirm + search 图标
  

-  业务
   1. 搜索
   2. tabbar(前端)条件筛选业务 （后端 查询参数 ？ order=price）
   3. 列表业务 wx:for
    data:{
       goods:[]
   }
   apifm （吐数据）
   /goods?order=&page=${n}&size=20&keyword=addidas   []

   - 页面的生命周期
     谁先发生，适合做什么
     onLoad 加载wxml,wxss，js 花的时间最少
     onShow  wxml + wxss 需要进行渲染，  js 还没执行完   还不能交互的
     onReady 