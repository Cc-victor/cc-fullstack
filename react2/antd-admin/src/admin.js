import React from 'react';
import {Row , Col } from  'antd';
import Header from './components/Header';
import NavLeft from './components/NavLeft';
import NavRight from './components/NavRight';
import Main from "./components/Main";

const Admin =(props)=>{
    return (
        // 后台的界面架构
        <div className="App">
           <Header />
           <div className="app-content">
               <Row type="flex" justify="center">
                   <Col span={2}>
                        <NavLeft />
                   </Col>
                   <Col span={10}>
                       {props.children}
                       <Main />
                   </Col>
                   <Col span={5}>
                      <NavRight />
                   </Col>
               </Row>
           </div>
        </div>
    )
}

export default Admin;