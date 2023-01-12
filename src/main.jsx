import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle  from './styles/Global.js';
import theme from './styles/Theme.js';
import {Profile} from './pages/Profile';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Profile />
    </ThemeProvider>
  </React.StrictMode>
)
