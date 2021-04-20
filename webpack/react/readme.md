前端三个最重要的知识点
1. es6 
2. webpack
   @5.17.0
   npm i -g webpack
3. react

- webpack 处理的入口，js 文件

- 写代码的时候在 src/index.js 上线的dist/mian.js
webpack 有着掌控力，天蝎座的（掌控力极强）

- react 初体验？
  1. 每个文件都得引入下react
     React 负责提供组件（小程序有内置的组件概念，网页(html/css/js dom）,
     )模板编译功能{{}} {name}数据绑定.....
   ```js
     import React from 'react'; //react?
     import ReactDOM from 'react-dom';
   ```
      webpack 处理一切静态资源，bundler .jsx -> .js
   - index.js entry 引入了一个test.jsx
     react 语法中 jsx 语法，用来表示模板