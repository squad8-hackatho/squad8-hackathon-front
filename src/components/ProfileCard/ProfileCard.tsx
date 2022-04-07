import React from 'react';
import { Section, ProfilePicture, P } from './styles';
import { ButtonBig } from '../Button/styles';
import foto from '../../assets/foto.png';

function ProfileCard() {
  const nome = 'Fulano de tal';
  const area = 'Área: Desenvolvedor';
  const nivel = 'Nível: ';
  return (
    <Section>
      <ProfilePicture src={foto} />
      <h1>{nome}</h1>
      <P>{area}</P>
      <P>{nivel}</P>
      <ButtonBig>Quero me conectar</ButtonBig>
    </Section>
  );
}

export default ProfileCard;
