import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Card = styled.section`
  width: 345px;
  height: 469px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 15px 15px;

  background-color: rgba(241, 241, 244, 0.3);
  border-radius: 10px;
  border: 1.5px solid ${theme.colors.mediumGray};

  img {
    width: 68px;
    height: 68px;

    border-radius: 50%;

    margin: 21px 13px 0px 26px;
  }

  h1 {
  }

  ${customMedia.lessThan('laptop')`
    margin: 0px 50px 50px 0px;
  `}

  ${customMedia.lessThan('tablet')`
    width: 90%;
    margin: 0px 100px 50px 0px;
    align-items: center;
  `}
`;

export const Header = styled.header`
  width: 369px;
  height: 100px;

  display: flex;
  flex-direction: row;

  ${customMedia.lessThan('tablet')`
    width: 100%;
    align-items: center;
  `}
`;

export const ProfilePicture = styled.img`
  width: 68px;
  height: 68px;

  border-radius: 50%;

  margin: 21px 13px 0px 26px;
`;

export const Description = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h1`
  margin: 29px 0px 10px 0px;

  font-weight: bold;

  ${customMedia.lessThan('tablet')`
    font-size: 22px;
    margin: 20px 0px 12px 0px;
  `}
`;

export const OccupationItem = styled.p`
  margin: 0px 20px 0px 0px;

  font-size: 14px;
  font-weight: medium;

  ${customMedia.lessThan('tablet')`
    font-size: 16px;
  `}
`;

export const Bio = styled.article`
  width: 310px;
  margin: 10px 0px;

  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    margin-top: 5px;
    font-size: 16px;
  }

  ${customMedia.lessThan('tablet')`
    width: 100%;
  `}
`;

export const Expertises = styled(Bio)`
  border-top: 1.5px solid ${theme.colors.mediumGray};
  p {
    margin-left: 10px;
    margin-top: 10px;
  }
`;

export const BioDescr = styled.p`
  height: 80px;

  font-size: 14px;
  font-weight: 400;
  text-align: justify;

  margin: 0px 62px 0px 26px;

  ${customMedia.lessThan('tablet')`
    font-size: 19px;
    margin: 0px 30px;
  `}
`;

export const Tags = styled.article`
  margin: 20px 10px;
  display: flex;
  flex-wrap: wrap;
  height: 70px;

  ${customMedia.lessThan('tablet')`
    justify-content: center;
    margin: 15px 100px 0px 100px;
  `}
`;

export const Tag = styled.button`
  width: 90px;
  height: 30px;
  font-weight: bold;

  background-color: ${theme.colors.blackGray};
  border-radius: 6px;
  margin: 2px 2px;

  color: ${theme.colors.white};
  font-size: 14px;
`;

export const Buttons = styled.article`
  width: 310px;
  display: flex;
  justify-content: center;

  border-top: 1.5px solid ${theme.colors.mediumGray};

  a {
    display: flex;
    text-decoration: none;
    justify-content: center;
    width: 150px;

    button {
      background-color: ${theme.colors.lightGray};
      color: ${theme.colors.black};
    }
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 150px;
  height: 50px;
  margin: 20px 5px 0px 5px;
  font-weight: bold;
  font-size: 16px;

  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border: 1px solid #000;

  border-radius: 8px;
  padding: 10px 10px;

  cursor: pointer;

  :active {
    position: relative;
    top: 1px;
  }
`;
