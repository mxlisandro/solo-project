import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './ReactComponents/App.jsx';
import ReactDOM from 'react-dom';

ReactDOM.render(<MyApp /> , document.querySelector('#react-root'));
// ReactDOM.render(<h1>hola cacas</h1> , document.querySelector('#react-root'));