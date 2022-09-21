import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import App from './app/app';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    font-family: 'Roboto', sans-serif;

    * {
      box-sizing: border-box;
      margin: 0px;
      padding: 0px;
    }
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </StrictMode>
);
