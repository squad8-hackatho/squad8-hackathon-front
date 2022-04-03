import React from 'react';
import { Card, Container, ProfilePictureStyle } from './styles';
import foto from '../../assets/foto.png';

type Props = {
  children: any;
};

export const MentorCard = ({ children }: Props) => {
  return (
    <Container>
      <Card>
        <ProfilePictureStyle src={foto} alt="Profile" />;{children}
      </Card>
    </Container>
  );
};
