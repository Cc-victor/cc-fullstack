import React, { useState ,useEffect} from 'react'
// import {getBannerRequest} from './api/request'
import {Provider} from 'react-redux'
import store from './store'
import Recommend from './pages/Recommend'
import logo from './logo.svg'
import './App.css'

function App() {
  // console.log('----------')
  const [count, setCount] = useState(0)
  // useEffect(() => {
    // console.log('--------------')
    // getBannerRequest()
    //  .then(data => {
      //  console.log(data)
    //  1. action ->dispatch(reducer)-> Store(State)  写的
    //  2. store 取出来  -> components  用了  读的
    //  3. connect({dispatch,state get})(Component)
  //    })
  // },[])
  return (
     <Provider store={store}>
        <Recommend /> 
     </Provider>
  )
}

export default App
