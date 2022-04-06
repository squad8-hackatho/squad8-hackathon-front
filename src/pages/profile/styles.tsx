import styled from 'styled-components';

const gray = '#C4C4C4';

const theme = {
  colors: {
    gray,
  },
};

export const Header = styled.header`
  width: 1173;
  height: 324;

  margin: 0px 135px 0px 135px;

  hr {
    border: 1px solid ${theme.colors.gray};
    width: 1173px;
  }
`;

export const LogoAndUserLogin = styled.header`
  display: flex;
  flex-direction: row;

  margin: 52px 0px 58px 0px;

  h3 {
    margin-right: 718px;
    font-size: 24px;
  }
`;

export const Search = styled.input`
  width: 1169px;
  height: 54px;
  padding: 17px 44px;
  margin: 0px 0px 38px 0px;

  background-color: ${theme.colors.gray};
  border: 1px solid ${theme.colors.gray};
  border-radius: 8px;

  font-size: 14px;

  :focus {
    outline: none;
  }
`;
