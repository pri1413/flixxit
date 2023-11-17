import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { save } from './save';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider save={save}>
    <App />
    </Provider>
  </React.StrictMode>
);

