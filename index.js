// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './ReactComponents/App.jsx';
// import ReactDOM from 'react-dom/client';

// ReactDOM.createRoot(<App /> , document.querySelector('#react-root'));
// // ReactDOM.render(<h1>hola cacas</h1> , document.querySelector('#react-root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './ReactComponents/App.jsx';

const root = ReactDOM.createRoot(document.querySelector('#react-root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

