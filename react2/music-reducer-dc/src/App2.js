import React, { Context, useContext,useState } from 'react';
import logo from './logo.svg';
import './App.css';
//全局
const ThemeContext = React.createContext(null);

export function ChildWithTheme(){
  const theme = useContext(ThemeContext)
  return (
    <div>我是有皮肤的{theme}</div>
  )
}

function ChildNoTheme(){
  console.log('不关心皮肤的子组件被渲染了');
  return <div>我不关心皮肤  皮肤改变的时候别让我重新渲染</div>
}

// 为什么？ 数据变了，组件要检测哪些地方跟相关的变了的数据，重新渲染VDOM树，=> 
// 更新局部 自顶向下  函数式组件  
// React.createElement({
//     ChildWithTheme,
//     props:{}  // immutable  内存之中新的一份 
// })

function ThemeApp({children}){
  const [theme,setTheme] = useState("light")
  const onChangeTheme = () => setTheme (theme === 'light'?'dark':'light');
  return(
    <ThemeContext.Provider value={theme}>
    <button onClick={onChangeTheme}>改变皮肤</button>
     {children}
    </ThemeContext.Provider>
  )
}


function App() {


  return (
       <ThemeApp>
         <ChildWithTheme />
         <ChildNoTheme />
         <ChildNoTheme />
         <ChildNoTheme />
         <ChildNoTheme />
         <ChildNoTheme />
       </ThemeApp>


  );
}

export default App;
