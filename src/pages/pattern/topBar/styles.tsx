import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Header = styled.header`
  width: 80vw;
  height: 10vh;
  margin: 0px 135px;

  hr {
    border: 1px solid ${theme.colors.mediumGray};
  }

  ${customMedia.lessThan('tablet')`
    margin: 0px 80px;
    height: 0px;
  `}
`;

export const LogoAndUserLogin = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 30px 0px 0px 0px;

  h3 {
    font-weight: normal;
    font-size: 24px;
  }

  button {
    height: 35px;
  }
`;

export const Search = styled.input`
  width: 80vw;
  height: 45px;
  padding: 17px 44px;
  margin: 40px 0px 38px 0px;

  background-color: ${theme.colors.mediumGray};
  border: 1px solid ${theme.colors.mediumGray};
  border-radius: 8px;

  font-size: 14px;

  :focus {
    outline: none;
  }
`;
