import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  display: flex;
`;

export const Main = styled.main``;

export const Article = styled.article`
  width: 72vw;
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

  ${customMedia.lessThan('tablet')`
    margin:0;
    width: 80vw;
    background-color: ${theme.colors.lightGray};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75vh;
  background-color: ${theme.colors.lightGray};
`;

export const Description = styled.article`
  width: 80vw;
  height: 25vh;
  background-color: ${theme.colors.white};

  &:nth-child(1) {
    border-radius: 8px;
    margin-top: 8%;
  }
  &:nth-child(2) {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin-top: 4%;
  }
  &:nth-child(3) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const Tags = styled.article`
  margin: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const Tag = styled.button`
  width: 90px;
  height: 30px;
  font-weight: bold;

  background-color: ${theme.colors.blackGray};
  border-radius: 6px;
  margin: 4px 4px;

  color: ${theme.colors.white};
  font-size: 14px;

  ${customMedia.lessThan('mobileM')`
    width: 80px;
  `}
`;

export const Info = styled(Description)``;

export const H1 = styled.h1`
  margin: 10px 20px;
  font-size: 24px;

  ${customMedia.lessThan('mobileM')`
    font-size: 20px;
  `}
`;
