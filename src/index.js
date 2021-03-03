import "bootstrap/dist/css/bootstrap.min.css";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// attempts to find catlist inlocal storage, otherside starter array is loaded in app.js;
const initialCatList = window.localStorage.getItem("catList");

ReactDOM.render(
  <React.StrictMode>
    <App initialCatList={initialCatList ? JSON.parse(initialCatList) : null} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
