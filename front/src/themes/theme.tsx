import React from 'react';
import { ThemeProvider } from 'styled-components';

const sizes = [14, 20, 48];

const fontSizes = {
  body: sizes[0],
  bodyExtraLarge: sizes[1],
  displayExtraLarge: sizes[2],
};

const primary = 'white';
const secundary = 'orange';

export const theme = {
  fontSizes,
  colors: {
    primary,
    secundary,
  },
};

export type ThemeType = typeof theme;

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
