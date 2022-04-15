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
  font-size: ${theme.fontSizes.buttonLarge};

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
    font-size: ${theme.fontSizes.buttonLarge};
  `};

  :hover {
    background-color: ${theme.colors.mainBlue};
    color: ${theme.colors.white};
  }

  :active {
    position: relative;
    top: 1px;
  }
`;

export const ButtonBig = styled.button`
  margin: 0px 10px 20px 10px;
  border-radius: 8px;
  padding: 15px 30px;
  background-color: ${theme.colors.mainOrange};
  color: ${theme.colors.white};
  cursor: pointer;

  :hover {
    border: 1px solid ${theme.colors.mainOrange};
    background-color: ${theme.colors.white};
    color: ${theme.colors.mainOrange};
  }

  :disabled {
    border: none;
    background-color: ${theme.colors.gray1};
    cursor: not-allowed;
  }

  ${customMedia.between('tablet', 'laptopS')`
    width: 200px;
  `}

  ${customMedia.lessThan('tablet')`
    width: 80vw;
    font-size: ${theme.fontSizes.buttonSmall};
  `}

  ${customMedia.lessThan('mobileL')`
    font-size: ${theme.fontSizes.button};
  `}
`;

export const LoginButton = styled.button`
  margin: 20px 10px 20px 10px;
  border-radius: 8px;
  padding: 15px 30px;
  background-color: ${theme.colors.mainOrange};
  color: ${theme.colors.white};
  cursor: pointer;
  width: 290px;

  :hover {
    border: 1px solid ${theme.colors.mainOrange};
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray3};
  }
`;

export default Button;
