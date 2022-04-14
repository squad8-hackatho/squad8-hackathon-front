import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { theme, customMedia } from '../../themes/theme';

export const Main = styled.main`
  background-color: ${theme.colors.background};
`;

export const Article = styled.article`
  width: 60vw;
  flex-direction: column;
  margin-left: 50px;

  ${customMedia.lessThan('tablet')`
    overflow: scroll;
    margin: 0px;
    height: 74.5vh;
    flex-direction: none;
    width: 90vw;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    width: 50vw;
    margin-left: 25px;
  `}
`;

export const Form = styled.form`
  margin-left: -50px;

  ${customMedia.lessThan('tablet')`
    margin-left: 0px;
  `}
`;

export const Nav = styled.nav`
  padding: 35px 15px;
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
      font-size: 16px;
    }

    a {
      font-size: 16px;
    }
  `}
`;

export const FooterButton = styled.footer`
  ${customMedia.lessThan('tablet')`
    margin:0;
    width: 90vw;
    bottom: 0px;
    margin-top: 5%;

    button {
      margin: 0;
      width: 90vw;
    }
  `}

  ${customMedia.lessThan('mobileM')`
    margin-top: 5%;
  `}

  ${customMedia.lessThan('mobileS')`
    margin-top: 11%;
  `}
`;

export const ResquestButton = styled(FooterButton)`
  button {
    margin-left: 0px;
  }
  ${customMedia.lessThan('tablet')`
    margin-top: 10%;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    margin-left: 25px;
    margin-top: 20px;
  `}
`;

export const Description = styled.article`
  width: 55vw;
  height: 18vh;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  word-break: break-all;

  margin-top: 3%;

  &:nth-child(2) {
    height: 25vh;
  }

  &:nth-child(3) {
    height: 13vh;
  }

  ${customMedia.lessThan('tablet')`
    justify-content: center;
    align-items: center;
    
    box-shadow: 0px 5px 0.3em -5px rgba(0, 0, 0, 0.2);
    width: 90vw;
    border-radius: 0;
    &:nth-child(1) {
      margin-top: 5%;
      height: 25vh;
      border-radius: 5px;
    }
    &:nth-child(2) {
      height 14vh;
      margin-top: 5%;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    &:nth-child(3) {
      height: 18vh;
      margin-top: -1px;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  `}

  ${customMedia.lessThan('mobileM')`
    margin-top: 4%;

    &:nth-child(2) {
      height: 15vh;
    }
    &:nth-child(3) {
      height: 18vh;
    }
  `}

  ${customMedia.between('laptopS', 'laptop')`
    &:nth-child(3) {
      height: 20vh;
    }
    &:nth-child(4) {
      height: 24vh;
    }

    p {
      font-size: 14px;
    }
  `}

  ${customMedia.between('laptop', 'laptopL')`
    &:nth-child(3) {
      height: 16vh;
    }
    &:nth-child(4) {
      height: 20vh;
    }

    p {
      font-size: 16px;
    }
  `}

  ${customMedia.between('tablet', 'laptopS')`
    width: 45vw;
    &:nth-child(2) {
      height: 20vh;
    }
    &:nth-child(3) {
      height: 14vh;
    }
    &:nth-child(4) {
      height: 16vh;
    }
  `}
`;

export const Info = styled(Description)`
  margin-top: 0%;
  height: 12vh;

  &:nth-child(2) {
    height: 15vh;
  }
  background-color: transparent;
  box-shadow: none;

  h2 {
    padding: 10px 0px;
  }

  &:nth-child(3) {
    display: flex;
    height: 3vh;
    flex-direction: row;

    p {
      padding: 2px 10px;
      font-size: 16px;
    }
  }

  &:nth-child(4) {
    height: 25vh;
  }

  ${customMedia.lessThan('tablet')`
    height: 10vh;

    &:nth-child(1) {
      height: 10vh;
    }

    &:nth-child(4) {
      height: 23vh;
    }
  `}
  ${customMedia.between('tablet', 'laptopS')`
    &:nth-child(1) {
      height: 10vh;
    }

    &:nth-child(2) {
      height: 10vh;
    }

    &:nth-child(4) {
      height: 23vh;
    }
  `}
`;

export const Tags = styled.article`
  margin: 0px 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const Tag = styled.button`
  width: 10vw;
  min-width: 95px;
  height: 40px;
  font-weight: bold;

  ${customMedia.lessThan('tablet')`
    width: 90px;
    height: 30px;
    font-size: 13px;

  `}

  background-color: ${theme.colors.mainBlue};
  border-radius: 6px;
  margin: 4px 4px;

  color: ${theme.colors.white};
  font-size: 14px;

  ${customMedia.lessThan('mobileM')`
    width: 80px;
  `}

  ${customMedia.between('laptopS', 'laptop')`
    width: 120px;
    height: 30px;
    font-size: 13px;
  `}

  ${customMedia.between('laptop', 'laptopL')`
    width: 120px;
    height: 30px;
    font-size: 13px;
  `}
`;

export const H2 = styled.h2`
  font-size: 22px;
  padding: 10px 20px;

  ${customMedia.lessThan('tablet')`
    font-size: 18px;
  `}

  ${customMedia.lessThan('mobileM')`
    font-size: 17px;
    padding: 10px 20px 5px 20px;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    margin-left: 25px;
  `}
`;

export const P = styled.p`
  font-size: 18px;
  padding: 10px 20px;

  ${customMedia.lessThan('tablet')`
    font-size: 16px;
  `}

  ${customMedia.lessThan('mobileM')`
    font-size: 14px;
  `}
`;

export const Section = styled.section`
  border-top: 2px solid ${theme.colors.lightGray};
  display: flex;
  flex-direction: row;

  ${customMedia.lessThan('tablet')`
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.lightGray};
  `}
`;

export const Input = styled.input`
  background-color: ${theme.colors.white};
  width: 55vw;
  height: 6vh;
  padding: 15px;
  border-radius: 5px;

  ${customMedia.lessThan('tablet')`
    width: 90vw;
  `}

  ${customMedia.lessThan('mobileM')`
    margin: 0;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    margin-left: 25px;
    width: 45vw;
    height: 5vh;
  `}
`;

export const CheckBox = styled.input`
  height: 25px;
  ${customMedia.between('tablet', 'laptopS')`
    margin-left: 25px;
  `}
`;

export const Textarea = styled.textarea`
  background-color: ${theme.colors.white};
  width: 55vw;
  height: 18vh;
  padding: 15px;
  border-radius: 5px;
  resize: none;

  ${customMedia.lessThan('tablet')`
    width: 90vw;
  `}

  ${customMedia.lessThan('mobileM')`
    margin: 0;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    margin-left: 25px;
    width: 45vw;
  `}
`;

export const StyledModal = Modal.styled`
  width: 25vw;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background-color: ${theme.colors.white};
  
  article {
    display: flex;
    justify-content: center;
    width: 25vw;
    height: 30%;
    border-bottom: 1px solid black;
    margin-top: 10px;
  }
  button {
    width: 8vw;
    margin-top: 10px;
  }
`;

export const Contact = styled.article`
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  width: 55vw;

  article {
    width: 25vw;
  }

  input {
    width: 25vw;
  }

  ${customMedia.lessThan('tablet')`
    display: inline;

    article {
      width: 80vw;
    }
    
    input {
      width: 90vw;
    }
  `}

  ${customMedia.between('tablet', 'laptopS')`
    flex-direction: column;
    input {
      width: 45vw;
    }
  `}
`;
