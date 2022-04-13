import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

type Props = {
  flag: boolean;
};

export const Section = styled.section<Props>`
  display: flex;
  width: 22vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  margin-left: 8%;

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

  ${(props) => {
    return customMedia.lessThan('tablet')`
    width: 100vw;
    height: 25vh;
    flex-direction: row;
    padding: 10% 0% 0% 6%;
    margin-left: 0px;
    background-color: ${
      props.flag ? theme.colors.lightGray : theme.colors.white
    }};
  `;
  }}

  ${customMedia.lessThan('mobileM')`
    padding-top: 8%;
    padding-left: 6%;
  `}

  ${customMedia.lessThan('mobileS')`
    padding-left: 3%;
    word-break: break-word;
  `}
`;

export const H1 = styled.h1`
  font-size: 30px;
  ${customMedia.lessThan('tablet')`
    font-size: 28px;
  `}
  ${customMedia.lessThan('mobileM')`
    font-size: 26px;
  `}
`;

export const Midia = styled.div`
  p {
    font-size: 15px;
    word-break: break-all;
  }
`;

export const Article = styled.article`
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${customMedia.lessThan('tablet')`
    width: 60vw;
    margin-left: 5%;
    align-items: start;
  `}
`;

export const Contact = styled(Article)`
  p {
    margin-top: 8%;
    font-size: 16px;
  }
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
  `}

  ${customMedia.between('tablet', 'laptopS')`
    width: 180px;
    height: 180px;
  `}
`;

export const P = styled.p`
  margin-top: 10px;
  font-size: 18px;

  ${customMedia.lessThan('tablet')`
    font-size: 19px;
  `}
  ${customMedia.lessThan('mobileM')`
    font-size: 17px;
  `}
`;
