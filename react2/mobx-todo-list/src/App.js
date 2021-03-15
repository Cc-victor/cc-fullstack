import Home from './components/Home'

//App里面没有用到store 里的数据   不需要有关系
//跨层级
function App(){
  return (
    <div className="App">
       <Home />
    </div>
  )
}

export default App