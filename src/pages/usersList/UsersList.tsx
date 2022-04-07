import React from 'react';
import { Dropdown, whatIsSelected } from '../../components/Dropdown';
import { TopBarPattern } from '../pattern';
import { MentorCard } from '../../components/MentorCard';

function UsersList() {
  const name = 'Nara Caroline';
  const occupation = 'Front End Dev';
  const level = 'Trainee';
  const bioDescription =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ex turpis. Morbi pretium diam sit amet lectus feugiat, mattis semper lorem laoreet. Nulla eget nunc ornare, finibus nunc at, bibendum ante. Suspendisse non facilisis erat. Etiam vel nisi.';
  const tags = [
    'HTML',
    'CSS',
    'JavaScript TESTE TESTE',
    'React',
    'NodeJS',
    'MongoDB',
  ];
  const dropdownItens = ['Desenvolvimento', 'Gestão de TI', 'UX e UI'];
  const dropdownItens2 = [
    'Engenharia de Dados',
    'Linguagem de Códigos',
    'Full Stack',
  ];

  return (
    <main>
      <TopBarPattern flag />
      <p>{whatIsSelected}</p>
      <Dropdown dropdownName="Hard Skill" dropdownItens={dropdownItens} />
      <Dropdown dropdownName="Hard Skill" dropdownItens={dropdownItens2} />
      <MentorCard
        name={name}
        occupation={occupation}
        level={level}
        tags={tags}
        bioDescription={bioDescription}
      />
    </main>
  );
}

export default UsersList;
