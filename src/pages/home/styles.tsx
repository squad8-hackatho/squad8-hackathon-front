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

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 50px 50px 0 50px;

  ${customMedia.lessThan('tablet')`
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
  `}
`;

export const ImageArticle = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  svg {
    ${customMedia.lessThan('tablet')`
      width: 350px;
      margin-top: -25%;
    `}
    ${customMedia.lessThan('mobileM')`
      width: 300px;
      margin-top: -38%;
    `}
  }
`;

export const Button = styled(ButtonBig)`
  border-radius: 2px;
  width: 20vw;
  height: 6vh;
`;

export const P = styled.p`
  display: inline-block;
  font-size: 36px;
  padding: 5px;
  line-height: 60px;

  ${customMedia.between('tablet', 'laptopS')`
    font-size: 30px;
    line-height: 50px;
  `}

  ${customMedia.lessThan('laptopS')`
    font-size: 30px;
    line-height: 40px;
  `}

  ${customMedia.lessThan('default')`
    font-size: 22px;
    line-height: 30px;
  `}
`;

export const CardName = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10%;

  button {
    ${customMedia.lessThan('tablet')`
      width: 80vw;
      margin-top: -40%;
    `}
  }
  a {
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
