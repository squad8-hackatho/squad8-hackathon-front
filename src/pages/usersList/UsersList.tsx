import React from 'react';
// import { Section } from './styles';
import { TopBarPattern } from '../pattern';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

function UsersList() {
  return (
    <main>
      <TopBarPattern />
      <ProfileCard />
    </main>
  );
}

export default UsersList;
