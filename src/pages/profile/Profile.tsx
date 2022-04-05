import React from 'react';
import { MentorCard } from '../../components/MentorCard';
import { Button, Nav } from './styles';

function Profile() {
  const name = 'Bruno Mundim';
  const ocupation = 'Front End Dev';
  const level = 'Senior';

  return (
    <MentorCard name={name} Occupation={ocupation} Level={level}>
      <Nav>
        <Button>Abrir Perfil</Button>
        <Button>Marcar Mentoria</Button>
      </Nav>
    </MentorCard>
  );
}

export default Profile;
