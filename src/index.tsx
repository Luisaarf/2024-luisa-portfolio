import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './fonts/font.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header/> 
    <Main/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
