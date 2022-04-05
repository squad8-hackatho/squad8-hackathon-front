import React from 'react';
import {
  Card,
  Container,
  ProfilePicture,
  ProfileInfo,
  OccupationDescription,
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
  Level: string;
};

export const MentorCard = ({
  children,
  name,
  Occupation,
  Level,
}: Props) => {
  const expertises = ['React', 'HTML', 'CSS', 'CSS', 'HTML', 'HTML'];

  return (
    <Container>
      <Card>
        <ProfilePicture src={foto} alt="Profile" />

        <ProfileInfo>
          <ProfileName fontSize={theme.fontSizes.displayExtraLarge}>
            {name}
          </ProfileName>
          <OccupationDescription>
            <p> Ocupação: {Occupation} </p>
            <p> Nível: {Level} </p>
          </OccupationDescription>
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
