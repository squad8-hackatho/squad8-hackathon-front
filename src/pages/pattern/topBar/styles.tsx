import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 90vw;

  hr {
    border: 1px solid ${theme.colors.mediumGray};
  }

  ${customMedia.lessThan('tablet')`
    hr {      
      width: 90vw;
    }
  `}

  ${customMedia.lessThan('mobileL')`
    hr {      
      width: 95vw;
    }
  `}

  ${customMedia.lessThan('mobileM')`
    hr {      
      width: 98vw;
    }
  `}

  ${customMedia.lessThan('mobileS')`
    hr {      
      width: 110vw;
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
  width: 90vw;
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

  ${customMedia.lessThan('tablet')`
    width: 90vw;
  `}

  ${customMedia.lessThan('mobileL')`
    width: 95vw;
  `}

  ${customMedia.lessThan('mobileM')`
    width: 98vw;
  `}

  ${customMedia.lessThan('mobileS')`
    width: 110vw;
  `}
`;

export const SearchHR = styled.div``;
