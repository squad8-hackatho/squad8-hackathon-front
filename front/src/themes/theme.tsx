import React from 'react';
import { ThemeProvider } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const sizes = [14, 20, 48];

const fontSizes = {
  body: sizes[0],
  bodyExtraLarge: sizes[1],
  displayExtraLarge: sizes[2],
};

const primary = 'white';
const secondary = 'orange';

export const theme = {
  fontSizes,
  colors: {
    primary,
    secondary,
  },
};

export const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '45em',
});

export type ThemeType = typeof theme;

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
