import React from 'react';
import { FooterButton, SectionMobile, Description, H1, Info } from './styles';
import { ButtonBig } from '../../components/Button/styles';

function Profile() {
  return (
    <SectionMobile>
      <Description>
        <H1>Descrição</H1>
      </Description>
      <Info>
        <H1>Área</H1>
      </Info>
      <FooterButton>
        <ButtonBig>Marcar Horário</ButtonBig>
      </FooterButton>
    </SectionMobile>
  );
}

export default Profile;
