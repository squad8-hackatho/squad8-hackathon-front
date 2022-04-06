import styled from 'styled-components';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  layout,
} from 'styled-system';
import { customMedia, theme } from '../../themes/theme';

type ButtonProps = TypographyProps & ColorProps & BorderProps & SpaceProps;

export const Button = styled.button<ButtonProps>`
  border-radius: 28px;
  border: 1px solid;
  padding: 16px 31px;
  display: block;

  text-decoration: none;
  font-weight: bold;

  ${typography}
  ${color}
  ${border}
  ${space}
  cursor: pointer;

  :hover {
    background-color: #2d7ff9;
    color: ${theme.colors.primary};
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const ButtonBig = styled.button`
  border-radius: 8px;
  border: 1px solid none;
  padding: 16px 31px;
  margin: 25px 10px 20px 10px;
  background-color: black;
  color: white;
  width: 220px;
  height: 45px;
  cursor: pointer;

  ${customMedia.between('tablet', 'laptopS')`
    padding: 8px 15px;
    width: 250px;
    height: 55px;
    font-size: 20px;
  `};

  ${layout}

  :hover {
    background-color: #2d7ff9;
    color: ${theme.colors.primary};
  }
`;

export default Button;
