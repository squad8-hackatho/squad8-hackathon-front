import React from 'react';
import { Link } from 'react-router-dom';
import { Section, ButtonsBar, Article, P, Nav } from './styles';
import { TopBarPattern } from '../pattern';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Button from '../../components/Button/styles';

function Profile() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  // const routesLink = [
  //   interest: 'Áreas de interesse',
  //   usersList: 'Lista de Usuários',
  //   profile: 'Perfil do mentor',
  // ]
  return (
    <main>
      <TopBarPattern flag={false} />
      <Section>
        <ProfileCard />
        <Article>
          <Nav>
            <Link to="/interest">Áreas de Interesse</Link>
            <Link to="/profile">Lista de Usuários</Link>
            <Link to="/">Perfil do Mentor</Link>
          </Nav>
          <ButtonsBar>
            <Button>Descrição</Button>
            <Button>Hard Skill</Button>
            <Button>Soft Skill</Button>
          </ButtonsBar>
          <P>{text}</P>
        </Article>
      </Section>
    </main>
  );
}

export default Profile;
