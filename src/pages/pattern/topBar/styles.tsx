import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Container = styled.section`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 90%;

  hr {
    border: 1px solid ${theme.colors.mediumGray};
  }

  ${customMedia.lessThan('tablet')`
    hr {      
      width: 100%;
    }
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
  width: 100%;
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

export const SearchHR = styled.div``;
