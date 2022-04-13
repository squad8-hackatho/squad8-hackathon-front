import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Container = styled.section`
  width: 100vw;
  height: 268px;

  display: flex;
  flex-direction: column;
  align-items: center;

  ${customMedia.lessThan('mobileL')`
    height: 192px;
  `}
`;

export const Header = styled.header`
  width: 81%;
  height: 224px;

  hr {
    border: 1px solid ${theme.colors.mediumGray};
  }

  ${customMedia.lessThan('tablet')`
    width: 92%;
    height: 116px;
  `}
`;

export const TopBar = styled.article`
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: space-between;
  height: 146px;

  h3 {
    color: ${theme.colors.orange};
    font-size: 28px;
    font-weight: 400;
  }

  ${customMedia.lessThan('mobileL')`
    padding-top: 20px;
    height: 70px;
  `}
`;

export const Search = styled.input`
  width: 100%;
  height: 54px;
  padding: 17px 44px;
  margin: 0px 0px 24px 0px;

  background-color: ${theme.colors.white};
  border-radius: 8px;

  font-size: 20px;
  font-weight: 400;
  color: ${theme.colors.gray02};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${theme.colors.gray02};
  }

  ${customMedia.lessThan('tablet')`
    margin-top: 22px;
    padding: 0 0 0 27px;
  `}
`;

export const SearchHR = styled.div`
  height: 0px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 163px;
  left: 150px;

  ${customMedia.lessThan('laptop')`
    left: 110px;
  `}
`;
