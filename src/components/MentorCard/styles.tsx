import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Card = styled.section`
  width: 348px;
  height: 447px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 26px;

  background-color: white;
  border-radius: 10px;
  border: 1.5px solid ${theme.colors.gray2};

  hr {
    border: 1px solid ${theme.colors.gray1};
    width: 85%;
    position: relative;
    bottom: -10px;
  }

  ${customMedia.lessThan('tablet')`
    margin: 15px 5px;
  `}

  ${customMedia.lessThan('mobileS')`
    margin: 10px 7px 5px 7px;
  `}
`;

export const Header = styled.header`
  width: 85%;
  min-height: 201px;

  display: flex;
  flex-direction: column;

  hr {
    border: 1px solid ${theme.colors.gray1};
    width: 100%;
    margin-top: 18px;
  }
`;

export const PictureAndName = styled.div`
  width: 100%;
  height: 56px;
  margin-top: 21px;

  display: flex;
  flex-direction: row;
`;

export const ProfilePicture = styled.img`
  width: 56px;
  height: 56px;

  border-radius: 50%;
`;

export const Description = styled.article`
  margin-left: 18px;

  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  margin: 6.5px 0 3px 0;

  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
`;

export const OccupationItem = styled.p`
  font-size: 14px;
  font-weight: medium;
  line-height: 20px;
`;

export const Bio = styled.article`
  margin: 24px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  word-wrap: break-word;
`;

export const BioDescr = styled.p`
  height: 80px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: justify;
  max-width: 295px;
  white-space: break-spaces;
`;

export const Expertises = styled.div`
  width: 85%;
  height: 148px;

  p {
    font-size: 14px;
    font-weight: 700;
    margin-top: 20px;
  }
`;

export const Tags = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  width: 45%;
  border-radius: 4px;
  padding: 8px;
  margin: 8px 8px 0 0;

  font-size: 12px;
  font-weight: bold;
  line-height: 20px;

  background-color: ${theme.colors.mainBlue};

  color: ${theme.colors.white};

  ${customMedia.lessThan('mobileS')`
    margin: 2px 2px 0 0;
  `}
`;

export const Buttons = styled.article`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 28px 0 21px 0;

  a {
    display: flex;
    text-decoration: none;
    justify-content: center;

    button {
      border: 2px solid ${theme.colors.mainOrange};
      background-color: ${theme.colors.white};
      color: ${theme.colors.mainOrange};
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 144px;
  height: 48px;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  background-color: ${theme.colors.mainOrange};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.mainOrange};

  border-radius: 8px;

  cursor: pointer;

  :active {
    position: relative;
    top: 1px;
  }

  ${customMedia.lessThan('mobileS')`
     padding: 0;
     line-height: 18px;
     width: 120px;
  `}
`;
