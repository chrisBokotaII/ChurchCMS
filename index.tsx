import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { I18nProvider } from './i18n';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
);