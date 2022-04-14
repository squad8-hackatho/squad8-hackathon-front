import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Container = styled.section`
  height: 100px;
  width: 100vw;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(196, 196, 196, 0.6);

  ${customMedia.lessThan('ipadMini')`
    height: 60px;
    border-bottom: none;
    padding: 0px;
    margin: 0;
    background-color: ${theme.colors.white}
  `};

  ${customMedia.lessThan('mobileM')`
  height: 50px;
  `};

  h3 {
    color: ${theme.colors.orange};
    font-weight: 400;
    font-size: 24px;
  }
`;

export const TopBar = styled.article`
  margin-left: 8%;

  ${customMedia.lessThan('tablet')`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    a {
      margin-right: 8%;
    }
  `};
`;

export const Button = styled.button`
  background-color: transparent;
`;

export const NavBar = styled.article`
  display: flex;
  width: 80vw;
  justify-content: space-between;

  ${customMedia.lessThan('laptopS')`
    width: 85vw;
  `};

  ${customMedia.lessThan('tablet')`
    width: 90vw;
  `};
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  p {
    margin-top: 10px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
    color: ${theme.colors.lightOrange};
  }
  svg {
    cursor: pointer;
  }
`;
