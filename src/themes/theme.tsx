import React from 'react';
import { ThemeProvider } from 'styled-components';
import { generateMedia } from 'styled-media-query';

const fontSizes = {
  h1: '36px',
  h2: '32px',
  h3: '30px',
  h4: '24px',
  h5: '18px',
  body1: '21px',
  body2: '16px',
  body3: '14px',
  buttonLarge: '22px',
  button: '16px',
  buttonSmall: '14px',
  caption1: '14px',
  caption2: '12px',
};

const colors = {
  background: '#F1F1F4',
  lightOrange: '#FEBBA2',
  mainOrange: '#FE4400',
  darkOrange: '#B93200',

  lightBlue: '#A8A8D0',
  mainBlue: '#36357E',
  darkBlue: '#2A2960',

  white: '#FFFFFF',
  gray1: '#DEE2E6',
  gray2: '#868E96',
  gray3: '#343A40',

  error: '#FF4242',
  success: '#0BB07B',
};

export const screenSizes = {
  laptopL: 90,
  laptop: 64,
  laptopS: 60,
  tablet: 48,
  ipadMini: 46,
  default: 32,
  mobileL: 27,
  mobileM: 23.5,
  mobileS: 20,
};

export const theme = {
  fontSizes,
  screenSizes,
  colors,
};

export const customMedia = generateMedia({
  laptopL: '91em',
  laptop: '64em',
  laptopS: '60em',
  tablet: '48em',
  ipadMini: '46em',
  default: '32em',
  mobileL: '27em',
  mobileM: '23.5em',
  mobileS: '20em',
});

export type ThemeType = typeof theme;

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
