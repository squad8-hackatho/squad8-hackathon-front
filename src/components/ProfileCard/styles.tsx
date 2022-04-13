import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Section = styled.section`
  display: flex;
  width: 23vw;
  height: 100vh;

  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  margin-left: 8%;
  border-radius: 5px;
  margin-top: -3px;

  button {
    margin: 7% 0;
    width: 19vw;
    height: 6.5vh;
    border-radius: 5px;
    line-height: 24px;
    font-size: 24px;
  }

  button {
    :hover {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.black};
      border: 1px solid #000;
    }
  }

  ${customMedia.lessThan('tablet')`
    width: 100vw;
    height: 18vh;
    border-radius: 0px;
    flex-direction: row;
    padding: 0% 0% 0% 6%;
    margin-left: 0px;
  `}

  ${customMedia.lessThan('mobileM')`
    padding-top: 8%;
    padding-left: 6%;
    padding-top: 0px;
  `}

  ${customMedia.lessThan('mobileS')`
    padding-left: 3%;
    word-break: break-word;
  `}
`;

export const H1 = styled.h1`
  font-size: 30px;
  line-height: 48px;
  font-weight: 700;

  ${customMedia.lessThan('tablet')`
    font-size: 22px;
    line-height: 35px;
  `}
  ${customMedia.lessThan('mobileS')`
    font-size: 18px;
    line-height: 10px;
  `}
`;

export const Midia = styled.div`
  display: flex;
  p {
    font-size: 15px;
    color: ${theme.colors.gray02};
    word-break: break-all;
  }

  ${customMedia.lessThan('default')`
    p {
      font-size: 12px;
    }
    svg {
      width: 20px;
    }
  `}

  ${customMedia.lessThan('mobileS')`
    p {
      font-size: 10px;
    }
    svg {
      width: 18px;
    }
  `}
`;

export const MidiaLinkedin = styled(Midia)`
  margin-top: 4%;
  svg {
    margin: 5px;
  }

  ${customMedia.lessThan('default')`
    margin-top: 0%;
    svg {
      margin: 2px 4px 0px 0px;
    }
  `}
`;

export const MidiaWhatsapp = styled(Midia)`
  svg {
    margin: 19px 15px 0px 0px;
  }
`;

export const MidiaEmail = styled(Midia)`
  svg {
    margin: 28px 15px 0px 0px;
  }
`;

export const Article = styled.article`
  width: 22vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 35px;
    margin: 0;
    font-weight: 500;
  }

  ${customMedia.lessThan('tablet')`
    width: 60vw;
    margin-left: 5%;
    align-items: start;
    p {
      line-height: 30px;
    }
  `}

  ${customMedia.lessThan('mobileS')`
    margin-top: 10px;
    h1 {
      margin-bottom: 5px;
    }
  `}
`;

export const Desktop = styled(Article)`
  margin-top: 2%;
  p {
    color: ${theme.colors.gray02};
    margin-top: 8%;
    font-size: 16px;
  }

  h3 {
    font-size: 22px;
    margin: 12px 0;
    color: ${theme.colors.orange};
  }
`;

export const Contact = styled(Article)``;

export const ProfilePicture = styled.img`
  width: 16vw;

  border-radius: 50%;
  margin: 25% 5% 6% 5%;

  ${customMedia.lessThan('tablet')`
    margin: 0px;
    width: 28vw;
  `}

  ${customMedia.lessThan('mobileL')`
    margin: 0px;
  `}
`;

export const P = styled.p`
  font-size: 18px;

  ${customMedia.lessThan('tablet')`
    font-size: 15px;
  `}

  ${customMedia.lessThan('default')`
    font-size: 13px;
  `}
  ${customMedia.lessThan('mobileS')`
    font-size: 11px;
  `}
`;
