import React from 'react';
import { ThemeProvider } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const sizes = [14, 20, 48];

const fontSizes = {
  body: sizes[0],
  bodyExtraLarge: sizes[1],
  displayExtraLarge: sizes[2],
};

const white = 'white';
const black = 'black';
const red = 'red';
const orange = 'orange';
const lightGray = '#f1f1f1';
const mediumGray = '#C4C4C4';
const blue = '#2d7ff9';
const blackGray = '#333333';

export const theme = {
  fontSizes,
  colors: {
    white,
    black,
    orange,
    lightGray,
    mediumGray,
    blackGray,
    red,
    blue,
  },
};

export const customMedia = generateMedia({
  laptopL: '91em',
  laptop: '64em',
  laptopS: '60em', // usando
  tablet: '48em', // usando
  default: '32em', // usando
  mobileL: '27em', // usando
  mobileM: '23.5em',
  mobileS: '20em',
});

export type ThemeType = typeof theme;

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
