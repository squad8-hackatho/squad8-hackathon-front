import React from 'react';
import { MentorCard } from '../components/MentorCard';
import { ProfileInfo } from '../components/ProfileInfo';

function Profile() {
  return (
    <main>
      <MentorCard>
        <ProfileInfo />
      </MentorCard>
    </main>
  );
}

export default Profile;
