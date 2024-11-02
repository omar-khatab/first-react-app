import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // this is the app.js , you can write app only without write .js
import reportWebVitals from './reportWebVitals';

// this is the method to make the app.js is the main component that all components in react will launch from him and this is done by
// index.html as if we want to make create root component, we should have html file and root will begin
// in the index.html there is the div element have root id that is the container for the react component
// target div element with id root with document.getElementById and make him the container for the react component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
