/* eslint-disable */
import React from 'react';
import { ThemeProvider } from 'styled-components';

const fontSizes: any = [14, 20, 48];
fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const primary = 'white';
const secundary = 'orange';

const theme = {
  fontSizes,
  colors: {
    primary,
    secundary,
  },
};

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
