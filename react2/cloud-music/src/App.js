import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
// es6 的 js模块化规范
import { GlobalStyle } from './style';   // style 放样式的
// icon 小图标
import { IconStyle} from './assets/iconfont/iconfont';
import {HashRouter} from 'react-router-dom'; //前端路由功能
import {renderRoutes} from 'react-router-config';
import routes from './routes/index.js';
function App(){ //  react 组件 函数式组件  界面显示的，
   return ( //JSX 
       <HashRouter>
       <GlobalStyle></GlobalStyle> 
       <IconStyle></IconStyle>
       <i className="iconfont">&#xe62b;</i>
       {renderRoutes(routes)}
       </HashRouter>
   )
}

// class App extends Component{  //类式组件
//   constructor(){
//     this.setState({

//     })
//   }
//   render(){
//      return(
//        <div>

//        </div>
//      )
//   }
// }
export default App;
