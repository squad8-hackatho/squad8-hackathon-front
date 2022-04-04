import React from 'react';
import { MentorCard } from '../../components/MentorCard';
import { A, Nav } from './styles';

function Profile() {
  const name = 'Name';
  const ocupation = 'Ocupation';

  return (
    <main>
      <MentorCard name={name} Occupation={ocupation}>
        <Nav>
          <A href="/#">Abrir Perfil</A>
          <A href="/#">Marcar Mentoria</A>
        </Nav>
      </MentorCard>
    </main>
  );
}

export default Profile;
