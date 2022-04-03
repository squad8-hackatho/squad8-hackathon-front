import React from 'react';
import Button from '../../components/Button/styles';
import { MentorCard } from '../../components/MentorCard';
import Tag from '../../components/Tag/styles';
import { theme } from '../../themes/theme';
import { ProfileInfo } from './ProfileInfo';
import { ProfilePicture } from './ProfilePicture';
import { Section } from './styles';

function Profile() {
  return (
    <main>
      <MentorCard>
        <ProfilePicture />
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
          <Section>
            <Button mt={10} mr={20} backgroundColor="#add8e6">
              Abrir Perfil
            </Button>
            <Button mt={10} backgroundColor="#add8e6">
              Marcar Mentoria
            </Button>
          </Section>
        </ProfileInfo>
      </MentorCard>
    </main>
  );
}

export default Profile;
