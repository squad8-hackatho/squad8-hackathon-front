import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';

export const Section = styled.section`
  width: 45vw;
  background-color: ${theme.colors.background};

  ${customMedia.lessThan('laptopS')`
    width: 100vw;
  `}
`;

export const Main = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const Article = styled.article`
  flex-direction: column;
  display: flex;
  padding: 50px 50px 0 50px;
  justify-content: center;

  ${customMedia.lessThan('laptopL')`
    text-align: center;
    padding: 30px 20px;
    `}

  ${customMedia.lessThan('tablet')`
    text-align: left;
    align-items: center;
  `}
`;

export const Title = styled.p`
  color: ${theme.colors.orange};
  font-size: 30px;

  ${customMedia.between('tablet', 'laptopS')`
    font-size: 45px;
    margin: 5% 0;
    line-height: 40px;
  `}
`;

export const ImageArticle = styled.article`
  justify-content: center;
  display: flex;

  svg {
    width: 100vw;
    height: 52vh;
    margin-left: 5%;

    ${customMedia.lessThan('laptop')`
      margin-top: -6%;
    `}

    ${customMedia.lessThan('laptopS')`
      margin-top: 0%;
    `}
    ${customMedia.lessThan('mobileM')`
        height: 50vh;
        margin-top: -19%;
    `}

    ${customMedia.between('default', 'tablet')`
        margin-top: -8%;
    `}

    ${customMedia.between('tablet', 'laptopS')`
      margin-top: 0%;
    `}
  }
`;

export const ArticleButton = styled.article`
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;

  a {
    &:nth-child(1) {
      button {
        :hover {
          color: ${theme.colors.orange};
        }
      }
    }
    &:nth-child(2) {
      button {
        background-color: ${theme.colors.white};
        color: ${theme.colors.orange};
        border: 1px solid ${theme.colors.orange};

        :hover {
          background-color: ${theme.colors.orange};
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.white};
        }
      }
    }
  }
`;

export const Button = styled(ButtonBig)`
  border-radius: 2px;
  font-size: 20px;
  width: 20vw;
  height: 6vh;
  padding: 0;

  ${customMedia.lessThan('laptopS')`
    width: 80vw;
    font-size: 24px;
  `}
  ${customMedia.lessThan('default')` 
    font-size: 20px;
  `}
  ${customMedia.lessThan('mobileL')` 
    font-size: 18px;
  `}
  ${customMedia.lessThan('mobileM')`  
    font-size: 16px;
  `}
`;

export const P = styled.p`
  display: inline-block;
  font-size: 36px;
  padding: 5px;
  line-height: 60px;

  ${customMedia.lessThan('laptopL')`
    font-size: 23px;
    line-height: 30px;
  `}

  ${customMedia.lessThan('laptop')`
    font-size: 20px;
    line-height: 30px;
  `}

  ${customMedia.lessThan('laptopS')`
    font-size: 25px;
    line-height: 40px;
  `}

  ${customMedia.lessThan('default')`
    font-size: 22px;
    line-height: 30px;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    font-size: 30px;
    line-height: 40px;
  `}
`;
