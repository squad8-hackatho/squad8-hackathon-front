import styled from 'styled-components';
import { TagStyle } from '../Tag/styles';

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
    background-color: #858585;
    border-color: #858585;
    color: black;
  }
`;
