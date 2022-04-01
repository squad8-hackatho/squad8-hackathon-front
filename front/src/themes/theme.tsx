/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 20, 48];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = 'blue';
const secundary = 'orange';

const theme = {
  fontSizes,
  colors: {
    primary,
    secundary,
  },
};

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
