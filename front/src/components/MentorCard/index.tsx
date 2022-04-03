import React from 'react';
import { Card, Container } from './styles';

type Props = {
  children: any;
};

export const MentorCard = ({ children }: Props) => {
  return (
    <Container>
      <Card>
        {children}
      </Card>
    </Container>
  );
};
