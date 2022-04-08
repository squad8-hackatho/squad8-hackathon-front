import React from 'react';
import { ModalProvider } from 'styled-react-modal';
import OurRoutes from './routes';
import { Theme, GlobalStyle } from './themes';

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <ModalProvider>
        <OurRoutes />
      </ModalProvider>
    </Theme>
  );
}

export default App;
