import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Article = styled.article`
  width: 70vw;
  padding: 0 30px;
  flex-direction: column;

  ${customMedia.lessThan('tablet')`
    padding: 0px;
    height: 75vh;
    flex-direction: none;
    width: 80vw;
    backgoru
  `}
`;

export const Nav = styled.nav`
  padding: 20px 27px;
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
  height: 10vh;

  ${customMedia.lessThan('mobileM')`
    margin-top: 5%;
`}

  ${customMedia.lessThan('tablet')`
    margin:0;
    width: 80vw;
    position: fixed;
    bottom: 0px;
    margin-bottom: 0px;
  `}
`;

export const Description = styled.article`
  width: 70vw;
  height: 20vh;
  background-color: ${theme.colors.white};
  margin-top: 2%;

  ${customMedia.lessThan('tablet')`
    justify-content: center;
    align-items: center;
    margin-top: 4%;
    width: 80vw;
    &:nth-child(1) {
      border-radius: 8px;
    }
    &:nth-child(2) {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
    &:nth-child(3) {
      margin-top: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `}
`;

export const Info = styled(Description)`
  height: 20vh;

  ${customMedia.lessThan('tablet')`
    background-color: ${theme.colors.lightGray};
    margin-top: 0%;
    height: 15vh;
  `}

  &:nth-child(3) {
    display: flex;
    height: 5vh;
    flex-direction: row;
  }
`;

export const Tags = styled.article`
  margin: 15px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const Tag = styled.button`
  width: 105px;
  height: 36px;
  font-weight: bold;

  ${customMedia.lessThan('tablet')`
    width: 90px;
    height: 30px;
  `}

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

export const P = styled.p`
  font-size: 18px;
  padding: 10px 20px;

  ${customMedia.lessThan('mobileM')`
    font-size: 20px;
  `}
`;

export const Section = styled.section`
  border-top: 2px solid ${theme.colors.lightGray};
  width: 100vw;
  display: flex;
  flex-direction: row;

  ${customMedia.lessThan('tablet')`
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Input = styled.input`
  background-color: ${theme.colors.mediumGray};
  width: 55vw;
  height: 6vh;
  padding: 15px;
  margin-top: 10px;
  border-radius: 5px;

  ${customMedia.lessThan('tablet')`
    width: 80vw;
  `}
`;

export const CheckBox = styled.input`
  height: 50px;
`;

export const Textarea = styled.textarea`
  background-color: ${theme.colors.mediumGray};
  width: 55vw;
  height: 18vh;
  padding: 15px;
  margin-top: 10px;
  border-radius: 5px;
  resize: none;

  ${customMedia.lessThan('tablet')`
    width: 80vw;
  `}
`;
