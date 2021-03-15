import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Router } from './routes';

import GlobalStyle from './styles/global';
import { theme } from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
