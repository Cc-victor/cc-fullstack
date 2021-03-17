import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,HashRouter,Route,Switch} from "react-router-dom"
// HashRouter  pc 和 手机端又能使用 兼容性好
//BrowserRouter  后端路由  一般手机端使用
// SPA  #/  /   
// src / 目录  架构意义
// /components  /pages  /api  /store  /layout页面框架板式
import Frame  from './layout/Frame'
import HookMovie from './pages/HookMovie'
import HookInfos from './pages/HookInfos'

function App() {
  return (
     <Router>
       <Frame>
         <Switch>
           <Route exact path="/" component={HookMovie}/>
           <Route path="/infos" component={HookInfos}/>
         </Switch>
       </Frame>
     </Router>
  );
}

export default App;
