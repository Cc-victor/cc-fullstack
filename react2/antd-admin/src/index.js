import React from 'react';
import ReactDOM from 'react-dom';
//取个别名
import './data.js'
import './index.css';
import './common.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();