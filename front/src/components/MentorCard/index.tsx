import React from 'react';
import {
  Card,
  Container,
  ProfilePicture,
  ProfileInfo,
  ProfileName,
  Tag,
  P,
} from './styles';
import foto from '../../assets/foto.png';
import { theme } from '../../themes/theme';

type Props = {
  children: any;
  name: string;
  Occupation: string;
};

export const MentorCard = ({ children, name, Occupation }: Props) => {
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
          <Tag bg={theme.colors.secondary} color={theme.colors.primary}>
            Carreira
          </Tag>
          {children}
        </ProfileInfo>
      </Card>
    </Container>
  );
};
