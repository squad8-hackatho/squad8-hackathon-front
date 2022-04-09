import styled from 'styled-components';
import { TagStyle } from '../Tag/styles';
import { theme, customMedia } from '../../themes/theme';

export const Button = styled(TagStyle)`
  outline: none;
  border-radius: 8px;
  margin: 0px 25px;
  height: 35px;
  width: 150px;
  padding-top: 8px;
  font-size: 16px;
  font-weight: bold;

  :hover {
    background-color: ${theme.colors.lightGray};
    border-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
  }

  ${customMedia.lessThan('tablet')`
    padding-top: 2px;
    margin: 0px 10px;
  `}
`;
