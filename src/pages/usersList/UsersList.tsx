import React from 'react';
// import { Dropdown } from '../../components/Dropdown';
import { TopBarPattern } from '../pattern';
import { MentorCard } from '../../components/MentorCard';
import { Filter, Mentors } from './styles';
import { NewDropdown } from '../../components/NewDropdown';

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
  /* const dropdownName= ['Área', 'Tipo de Habilidade', 'Tecnologia']
  const dropdownItens = [
    ['Desenvolvimento', 'Gestão de TI', 'UX e UI'],
    ['Hard Skills', 'Soft Skills'],
    [
      'Engenharia de Dados',
      'Linguagem de Códigos',
      'Sistemas Operacionais',
      'Full Stack',
      'Segurança de Rede',
    ]
  ]; */

  return (
    <main>
      <TopBarPattern flag />
      <Filter>
        <NewDropdown />
      </Filter>
      <Mentors>
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
        <MentorCard
          name={name}
          occupation={occupation}
          level={level}
          tags={tags}
          bioDescription={bioDescription}
        />
      </Mentors>
    </main>
  );
}

export default UsersList;
