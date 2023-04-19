import React from 'react';
import { App } from './components/app/App';
import './index.scss';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
