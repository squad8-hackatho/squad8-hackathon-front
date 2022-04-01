/* eslint-disable */
import React from 'react';
import OurRoutes from './routes';
import { Theme, GlobalStyle } from './themes';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <OurRoutes />
    </Theme>
  );
}

export default App;
