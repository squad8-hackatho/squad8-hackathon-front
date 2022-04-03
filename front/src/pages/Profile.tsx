import React from 'react';
import { MentorCard } from '../components/MentorCard';
import { ProfileInfo } from '../components/ProfileInfo';
import Button from '../components/Button/styles';
import Tag from '../components/Tag/styles';
import { theme } from '../themes/theme';

function Profile() {
  return (
    <main>
      <MentorCard>
        <ProfileInfo>
          <p style={{ marginTop: '60px', fontWeight: 'bolder' }}>
            Realiza mentorias sobre
          </p>
          <Tag
            bg={theme.colors.secondary}
            color={theme.colors.primary}
            mt={20}
            py={1}
            px={2}
          >
            Carreira
          </Tag>
          <section>
            <Button mt={10} mr={20} backgroundColor="#add8e6">
              Abrir Perfil
            </Button>
            <Button mt={10} backgroundColor="#add8e6">
              Marcar Mentoria
            </Button>
          </section>
        </ProfileInfo>
      </MentorCard>
    </main>
  );
}

export default Profile;
