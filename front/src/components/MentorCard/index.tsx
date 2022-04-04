import React from 'react';
import {
  Card,
  Container,
  ProfilePicture,
  ProfileInfo,
  ProfileName,
  Tag,
  P,
  TagContainer,
} from './styles';
import foto from '../../assets/foto.png';
import { theme } from '../../themes/theme';

type Props = {
  children: any;
  name: string;
  Occupation: string;
};

export const MentorCard = ({ children, name, Occupation }: Props) => {
  const expertises = ['React', 'HTML', 'CSS', 'CSS', 'HTML', 'HTML'];

  return (
    <Container>
      <Card>
        <ProfilePicture src={foto} alt="Profile" />
        <ProfileInfo>
          <ProfileName fontSize={theme.fontSizes.displayExtraLarge}>
            {name}
          </ProfileName>
          <p> {Occupation} </p>
          <P>Realiza mentorias sobre</P>
          <TagContainer>
            {expertises.map((expertise) => {
              return (
                <Tag bg={theme.colors.secondary} color={theme.colors.primary}>
                  {expertise}
                </Tag>
              );
            })}
          </TagContainer>
          {children}
        </ProfileInfo>
      </Card>
    </Container>
  );
};
