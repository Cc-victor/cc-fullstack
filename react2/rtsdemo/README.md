1. npx 创建 react ts  项目
2. 不同的需求项目结构如何，这个要清楚
   - 简单应用
     components + api + model(跨文件取接口？
     ts 自定义类型type 接口 model  
     1. API promise<MemberEntity[]>
        服务器端返回的数据类型
     2. 显示某一个用户  子组件 
         props:MemberEntity
     ) 
   - 全家桶  比较全面而复杂的应用的时候  SPA (singal page application)
   - react/react-dom + react-router/react-router-dom + 
      redux/react-redux|mobx

    components+pages(store)+store+api+routes

    - 自定义构建流程 
       webpack babel

  - 全栈项目
     egg.js + react + mysql
     didi-frontebd   create-react-app 
     didi-backend egg init
     db migration(迁移) + database/table(索引) + seeds(初始化数据)

  - SSR 项目 服务器端渲染
  可以解决SEO问题  掘金就是SEO项目  SEO（搜索引擎优化）
  SPA  #root bundle.js来获取 组件+ 数据状态