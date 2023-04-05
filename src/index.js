import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Auth from './components/auth/Auth';
import App from './App';

/* main code */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Auth /> */}
    <App />
  </React.StrictMode>
);
