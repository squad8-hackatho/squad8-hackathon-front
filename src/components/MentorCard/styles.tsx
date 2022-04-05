import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import {
  border,
  BorderProps,
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { theme } from '../../themes/theme';

type ButtonProps = TypographyProps & ColorProps & BorderProps & SpaceProps;
type ProfileNameProps = TypographyProps;

const customMedia = generateMedia({
  laptopL: '91em',
  laptop: '64em',
  laptopS: '60em',
  tablet: '48em',
  default: '32em',
  mobileL: '27em',
  mobileM: '23.5em',
  mobileS: '20em',
});

export const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 40px;
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 32px;
  width: 60vw;

  ${customMedia.lessThan('laptopL')`
    width: 70%;
    justify-content: space-around;
  `};

  ${customMedia.lessThan('laptop')`
    width: 100%;
    justify-content: space-around;
  `};

  ${customMedia.lessThan('laptopS')`
    flex-direction: column;
    align-items: center;
  `};

  ${customMedia.lessThan('default')`
    padding: 3px;
  `};
`;

export const ProfilePicture = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 200px;

  ${customMedia.lessThan('mobileM')`
    width: 200px;
  `};
`;

export const ProfileInfo = styled.div`
  margin: 20px 10px 0px 50px;
`;

export const ProfileName = styled.h1<ProfileNameProps>`
  line-height: 55px;
  margin-bottom: 10px;

  ${typography}
`;

export const OccupationDescription = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin-right: 50px;
  }

  ${customMedia.lessThan('default')`
    flex-direction: column;

    p{
      margin-top: 10px;
    }
  `};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Tag = styled.button<ButtonProps>`
  border-radius: 28px;
  border: 1px solid;
  padding: 12px 16px;
  margin: 15px 10px 10px 0;
  display: block;

  text-decoration: none;
  font-weight: bold;

  ${color}
  ${border}
  ${space}

  ${customMedia.lessThan('default')`
    margin: 3px 3px 3px 3px;
  `};
`;

export const P = styled.p`
  font-weight: bolder;
  margin-top: 25px;
`;
