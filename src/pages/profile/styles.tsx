import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  display: flex;

  ${customMedia.lessThan('tablet')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const Article = styled.article`
  width: 72vw;

  ${customMedia.lessThan('tablet')`
    width: 80vw;
    height: 30vh;
    background-color: red;
  `}
`;

export const Nav = styled.nav`
  border-top: 2px solid ${theme.colors.lightGray};
  padding: 20px 25px 70px 50px;
  display: flex;

  p {
    margin: -2px 5px 0px 5px;
  }

  a {
    font-size: 14px;
    padding: 0px 5px;
    text-decoration: none;

    &:nth-child(3) {
      pointer-events: none;
      color: ${theme.colors.black};
    }
  }

  ${customMedia.between('tablet', 'laptopS')`
    p {
      font-size: 18px;
    }

    a {
      font-size: 18px;
    }
  `}
`;

export const Li = styled.li`
  font-size: 20px;
  line-height: 1.4;
`;

export const Ul = styled.ul`
  margin: 35px 400px 0px 50px;
  list-style-type: none;

  ${customMedia.lessThan('tablet')`
    margin-right: 50px;
    margin-bottom: 50px;
  `}
`;

export const FooterButton = styled.footer`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.mediumGray};

  ${customMedia.lessThan('mobileM')`
    margin-top: 5%;
`}
`;

export const ButtonsBar = styled.article`
  display: flex;
  flex-direction: row;
  padding: 15px 25px;
  border-top: 2px solid ${theme.colors.lightGray};
  border-bottom: 2px solid ${theme.colors.lightGray};

  ${customMedia.between('tablet', 'laptopS')`
    justify-content: center;
    align-items: center;
  `}

  ${customMedia.lessThan('tablet')`
    padding: 15px 0px;
    background-color: ${theme.colors.mediumGray};
    border-top: none;
    border-top-left-radius: 10px 10px;
    border-top-right-radius: 10px 10px;
  `}
`;

export const SectionMobile = styled.section`
  height: 80vh;
  width: 100vw;
  display: flex:
  align-items: center;
  justify-content: center;
`;

export const P = styled.p``;
