import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

export const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  li + li {
    margin-left: 10px;
  }

  li {
    display: inline-block;
    list-style: none;
    text-decoration: underline;
    cursor: pointer;
  }

  li.active {
    color: blue;
  }

  a {
    text-decoration: none;
  }

  #root {
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
