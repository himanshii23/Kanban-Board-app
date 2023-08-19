import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
window.React1 = require('react');


require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);



reportWebVitals();
 