import React from 'react';
import { FooterButton, SectionMobile } from './styles';
import { ButtonBig } from '../../components/Button/styles';

function Profile() {
  return (
    <SectionMobile>
      <FooterButton>
        <ButtonBig>Quero me conectar</ButtonBig>
      </FooterButton>
    </SectionMobile>
  );
}

export default Profile;
