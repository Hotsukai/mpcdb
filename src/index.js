import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import ja from "./locales/ja.json"
import en from "./locales/en.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en
    },
    ja: {
      translation: ja
    },
  },
  initImmediate: false,
  lng: 'en',
  interpolation: { escapeValue: false },
  saveMissing: true,
  // fallbackLng: 'ja', 
  fallbackLng: false, // フォールバックしない＝keyをそのまま表示
  returnEmptyString: false, // 空文字での定義を許可
  nsSeparator:':::',
});

export {i18n}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
