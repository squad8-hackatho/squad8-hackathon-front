import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeRedux from './redux/store';
import reportWebVitals from './reportWebVitals';
import App from './App';

const modalRoot = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(modalRoot);

root.render(
  <React.StrictMode>
    <Provider store={storeRedux.store}>
      <PersistGate loading={null} persistor={storeRedux.persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
