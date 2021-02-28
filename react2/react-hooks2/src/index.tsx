import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { App } from './app';
// AppRouter 路由接管 最外层，路由模块化成一个组件

//router jspang
import {AppRouter} from './router';
// import { HelloComponent } from './hello';

ReactDOM.render(
    // <App />,
    <AppRouter />,
    document.getElementById('root')
);