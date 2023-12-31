import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Js i s just putting our App inside of js root
const root = ReactDOM.createRoot(document.getElementById('root'));  //grabbing the element from html by the id=root 
root.render(
  <React.StrictMode>
    {/* Store info in here to render on page */}
    <App />     
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
