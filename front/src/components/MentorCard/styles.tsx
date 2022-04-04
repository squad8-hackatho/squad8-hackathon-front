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
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
});

export const ProfilePicture = styled.img`
  width: 300px;
  border-radius: 200px;
  margin: 20px 60px 20px 40px;
  justify-content: center;
`;

export const Container = styled.section`
  display: flex;
  min-width: auto;
  justify-content: center;
  padding: 50px;
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;
  display: flex;
  align-items: center;
  padding: 32px;

  ${customMedia.lessThan('mobile')`
    flex-direction: column;
  `};
`;

export const ProfileInfo = styled.div`
  margin: 20px;
`;

export const ProfileName = styled.h1<ProfileNameProps>`
  line-height: 55px;
  margin-bottom: 10px;

  ${typography}
`;

export const Tag = styled.button<ButtonProps>`
  border-radius: 28px;
  border: 1px solid;
  padding: 12px 16px;
  margin: 15px 0 75px 0;
  display: block;

  text-decoration: none;
  font-weight: bold;

  ${color}
  ${border}
  ${space}
`;

export const P = styled.p`
  font-weight: bolder;
  margin-top: 25px;
`;
