import React from 'react';
import { createRoot } from 'react-dom/client';
import MyApp from './ReactComponents/App.jsx';
import ReactDOM from 'react-dom';
import TreeRender from './ReactComponents/TreeContainer.jsx';

ReactDOM.render(<MyApp /> , document.querySelector('#react-root'));
ReactDOM.render(<TreeRender /> , document.querySelector('#treeDiv'));
// ReactDOM.render(<h1>hola cacas</h1> , document.querySelector('#react-root'));