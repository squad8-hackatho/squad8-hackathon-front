import styled from 'styled-components';
import { customMedia } from '../../themes/theme';

export const Nav = styled.nav`
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  border-radius: 28px;
  border: 1px solid;
  display: block;

  margin-right: 30px;
  margin-top: 10px;

  width: 200px;
  height: 50px;

  font-size: 1em;
  text-decoration: none;
  font-weight: bold;

  :hover {
    background-color: orange;
    color: white;
  }

  ${customMedia.lessThan('default')`
    width: 120px;
    height: 50px;
  `};
`;
