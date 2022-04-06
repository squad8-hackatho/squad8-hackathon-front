import React from 'react';
import { MentorCard } from '../../components/MentorCard';

function Profile() {
  const name = 'Bruno Mundim';
  const occupation = 'Front End Dev';
  const level = 'Trainee';
  const bioDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ex turpis. Morbi pretium diam sit amet lectus feugiat, mattis semper lorem laoreet. Nulla eget nunc ornare, finibus nunc at, bibendum ante. Suspendisse non facilisis erat. Etiam vel nisi.';
  const tags = ['HTML', 'CSS', 'JavaScript TESTE TESTE', 'React', 'NodeJS', 'MongoDB'];

  return (
    <MentorCard
      name={name}
      occupation={occupation}
      level={level}
      tags={tags}
      bioDescription={bioDescription}
    />
  );
}

export default Profile;
