import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  display: flex;

  ${customMedia.lessThan('tablet')`
    flex-direction: column;
    width: 100vw;
    align-items: center;
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Article = styled.article`
  width: 72vw;
  flex-direction: column;

  ${customMedia.lessThan('tablet')`
    flex-direction: none;
    width: 80vw;
  `}
`;

export const Nav = styled.nav`
  padding: 20px 50px;
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

export const Description = styled.article`
  width: 70vw;
  height: 20vh;
  padding: 0px 35px;
  background-color: ${theme.colors.white};

  ${customMedia.lessThan('tablet')`
    padding: 0px;
    width: 80vw;
  `}

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

export const Info = styled(Description)`
  height: 20vh;
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

export const H2 = styled.h2`
  font-size: 24px;
  padding: 10px 20px;

  ${customMedia.lessThan('mobileM')`
    font-size: 20px;
  `}
`;

export const Container = styled.article`
  border-top: 2px solid ${theme.colors.lightGray};
`;
