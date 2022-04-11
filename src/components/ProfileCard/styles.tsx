import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  display: flex;
  width: 28vw;
  height: 89vh;

  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.lightGray};

  button {
    margin-top: 50px;
  }

  button {
    :hover {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.black};
      border: 1px solid #000;
    }
  }

  ${customMedia.lessThan('tablet')`
    background-color: ${theme.colors.white};
    flex-direction: row;
    width: 100vw;
    justify-content: center;
    height: 20vh;
    margin-top: 10%;
    margin-bottom: 5%;
  `}
`;

export const H1 = styled.h1`
  ${customMedia.lessThan('tablet')`
    font-size: 25px;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    font-size: 30px;
  `}
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${customMedia.lessThan('tablet')`
    margin-left: 5%;
    align-items: start;
  `}
`;

export const ProfilePicture = styled.img`
  width: 180px;
  height: 180px;

  border-radius: 50%;
  margin: 70px 50px 20px 50px;

  ${customMedia.lessThan('tablet')`
    margin: 0px;
    width: 120px;
    height: 120px;
  `}

  ${customMedia.lessThan('mobileL')`
    margin: 0px;
    width: 110px;
    height: 110px;
  `}

  ${customMedia.between('tablet', 'laptopS')`
    width: 180px;
    height: 180px;
  `}
`;

export const P = styled.p`
  margin-top: 10px;
  font-size: 20px;

  ${customMedia.lessThan('tablet')`
    font-size: 18px;
  `}
  ${customMedia.lessThan('mobileL')`
    font-size: 16px;
  `}
  ${customMedia.between('tablet', 'laptopS')`
    font-size: 25px;
  `}
`;
