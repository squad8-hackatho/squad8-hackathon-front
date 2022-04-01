/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';

const modalRoot = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(modalRoot);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
