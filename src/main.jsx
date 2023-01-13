import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle  from './styles/Global.js';
import theme from './styles/Theme.js';
import { Create } from './pages/Create';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Create />
    </ThemeProvider>
  </React.StrictMode>
)
