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

type ButtonProps = TypographyProps & ColorProps & BorderProps & SpaceProps;

export const Tag = styled.button<ButtonProps>`
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
`;

export default Tag;
