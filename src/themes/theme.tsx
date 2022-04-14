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
const orange = '#FE4400';
const lightOrange = '#FF652C';
const lightGray = '#F1F1F1';
const gray01 = '#DEE2E6';
const gray02 = '#343a4066';
const background = '#F1F1F4';
const mediumGray = '#C4C4C4';
const darkGray = '#8f8f8f';
const blue = '#2d7ff9';
const blackGray = '#474747';
const mainBlue = '#36357e';
const grayLetter = '#343a40';
const buttonLightGray = '#868E964D'

export const screenSizes = {
  laptopL: 90,
  laptop: 64,
  laptopS: 60,
  tablet: 48,
  default: 32,
  mobileL: 27,
  mobileM: 23.5,
  mobileS: 20,
};

export const theme = {
  fontSizes,
  screenSizes,
  colors: {
    white,
    black,
    orange,
    lightOrange,
    lightGray,
    gray01,
    gray02,
    background,
    mediumGray,
    darkGray,
    blackGray,
    red,
    blue,
    mainBlue,
    grayLetter,
    buttonLightGray,
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
