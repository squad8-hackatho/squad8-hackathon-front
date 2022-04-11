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
  LayoutProps,
} from 'styled-system';
import { customMedia, theme } from '../../themes/theme';

type ButtonProps = TypographyProps &
  ColorProps &
  BorderProps &
  SpaceProps &
  LayoutProps;

export const Button = styled.button<ButtonProps>`
  border-radius: 28px;
  border: 1px solid none;
  padding: 15px 30px;
  display: block;
  width: 220px;
  height: 45px;
  text-decoration: none;
  font-weight: bold;

  ${typography}
  ${color}
  ${border}
  ${space}
  ${layout}
  cursor: pointer;

  ${customMedia.between('tablet', 'laptopS')`
    padding: 8px 15px;
    width: 250px;
    height: 55px;
    font-size: 20px;
  `};

  :hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  :active {
    position: relative;
    top: 1px;
  }
`;

export const ButtonBig = styled(Button)`
  margin: 20px 10px 20px 10px;
  border-radius: 8px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};

  :hover {
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }

  ${customMedia.between('tablet', 'laptopS')`
    width: 200px;
    margin-bottom: 350px;
    padding: 0px;
  `}
`;

export default Button;
