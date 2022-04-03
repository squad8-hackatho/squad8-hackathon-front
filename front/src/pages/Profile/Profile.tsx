import React from 'react';
import { MentorCard } from '../../components/MentorCard';
import { ProfileInfo } from './ProfileInfo';
import { ProfilePicture } from './ProfilePicture';

function Profile() {
  return (
    <main>
      <MentorCard>
        <ProfilePicture />
        <ProfileInfo />
      </MentorCard>
    </main>
  );
}

export default Profile;
