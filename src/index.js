import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ... another way to write render method ... 
// const container = document.getElementById('root');
// const roots = React.createRoot(container)
// roots.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ) 

