import styled from 'styled-components';

const gray = '#C4C4C4';

const theme = {
  colors: {
    gray,
  },
};

export const Header = styled.header`
  width: 80vw;
  height: 8vh;

  margin: 0px 135px;

  hr {
    border: 1px solid ${theme.colors.gray};
  }
`;

export const LogoAndUserLogin = styled.header`
  display: flex;
  flex-direction: row;

  margin: 20px 0px 0px 0px;

  h3 {
    font-weight: normal;
    margin-right: 718px;
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

  background-color: ${theme.colors.gray};
  border: 1px solid ${theme.colors.gray};
  border-radius: 8px;

  font-size: 14px;

  :focus {
    outline: none;
  }
`;
