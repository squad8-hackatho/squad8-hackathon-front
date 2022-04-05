import React from 'react';
import OurRoutes from './routes';
import { Theme, GlobalStyle } from './themes';
import { Pattern } from './pages';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Pattern>
        <OurRoutes />
      </Pattern>
    </Theme>
  );
}

export default App;
