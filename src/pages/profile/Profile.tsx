import React from 'react';
import Button from '../../components/Button/styles';
import { Dropdown, whatIsSelected } from '../../components/Dropdown';
import { MentorCard } from '../../components/MentorCard';
import { Header, LogoAndUserLogin, Search } from './styles';

function Profile() {
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
  const dropdownItens2 = ['Engenharia de Dados', 'Linguagem de Códigos', 'Full Stack'];

  return (
    <main>
      <Header>
        <LogoAndUserLogin>
          <h3>TechnicalShare</h3>
          <Button
            width={134}
            height={44}
            p={0}
            borderRadius={8}
            marginRight={11}
          >
            Cadastrar-se
          </Button>
          <Button width={134} height={44} p={0} borderRadius={8}>
            Entrar
          </Button>
        </LogoAndUserLogin>
        <Search placeholder='Procure o seu mentor aqui'/>
        <hr />        
      </Header>
      <p>{whatIsSelected}</p>
      <Dropdown dropdownName='Hard Skill' dropdownItens={dropdownItens} />
      <Dropdown dropdownName='Hard Skill' dropdownItens={dropdownItens2} />
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

export default Profile;
