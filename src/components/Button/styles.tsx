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
} from 'styled-system';
import { theme } from '../../themes/theme';

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

export default Button;
