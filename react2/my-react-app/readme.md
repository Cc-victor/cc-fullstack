nvm 一台电脑多node 版本管理  作业
nvm list
nvm use v15.7.0

- vite 正在干掉webpack
  块  vue3
  : 30001  前端项目 react
- 3000 music sdk API 服务
  跨域访问  端口不一样、
 - 前后端分离
    ：3000/banner  展示到页面上
    [{
        immageUrl:
    }]
    1. axios  API 从后端到前端 src/api :3000/banner
       API 模块 / banner  =>  请求后端
       /singers 歌手列表
    2. store  actiongetBannerList
       axios  API 

    3. 组件  

- redux 引入的标准流程
   将单一状态树引入组件开发流程
  1. 安装
     yarn add react-redux redux redux-thunk
     redux-thunk 是支持异步action 操作的中间件
  2. 目  录  store
      export default store
      createStore(reducer)
      reducer 比较复杂的，可以模块化的 combineReducers
      applyMiddlewares 中间件服务   redux-thunk   redux-log...
   3. reducer 过日子  业务
      - 形式  纯函数 返回状态
      - 放哪里  store/
  
 store 提供给 Provider    -> App 组件
 connect({state要哪些,dispatch})(Component) HOC 
 我们不需要每个组件自己去store ,connect
store  createStore(reducer  来自很多模块)
{reducer函数，action}组合
bannerList reducer 函数  getBannerList action