import React from 'react';
import { MentorCard } from '../../components/MentorCard';
import { A } from './styles';

function Profile() {
  const name = 'Name';
  const ocupation = 'Ocupation';

  return (
    <main>
      <MentorCard name={name} Occupation={ocupation}>
        <nav>
          <A href="/#">Abrir Perfil</A>
          <A href="/#">Marcar Mentoria</A>
        </nav>
      </MentorCard>
    </main>
  );
}

export default Profile;
