import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

type Props = {
  flag: boolean;
};

export const Container = styled.section<Props>`
  width: 100vw;
  height: ${(props) => {
    return props.flag ? '268px' : '100px';
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => {
    return props.flag ? 'none' : 'center';
  }};

  ${(props) => {
    return customMedia.lessThan('mobileL')`
    height: ${props.flag ? '192px;' : '0'};
  `;
  }}
`;

export const Header = styled.header`
  width: 81%;

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
    font-weight: 400;
  }

  ${customMedia.lessThan('mobileL')`
    padding-top: 20px;
    height: 70px;
  `}
`;

export const H3 = styled.h3<Props>`
  font-size: ${(props) => {
    return props.flag ? '28px' : '0px';
  }};
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

export const SearchHR = styled.div``;

export const SearchIcon = styled.div`
  position: absolute;
  top: 163px;
  left: 150px;

  ${customMedia.lessThan('laptop')`
    left: 110px;
  `}
`;
