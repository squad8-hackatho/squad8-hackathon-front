import React from 'react';
import {
  FooterButton,
  SectionMobile,
  Description,
  H1,
  Info,
  Tags,
  Tag,
} from './styles';
import { ButtonBig } from '../../components/Button/styles';

function Profile() {
  return (
    <SectionMobile>
      <Description>
        <H1>Descrição</H1>
      </Description>
      <Info>
        <H1>Área</H1>
        <Tags>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
        </Tags>
      </Info>
      <Info>
        <H1>Tecnologias</H1>
        <Tags>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
          <Tag>HTML</Tag>
        </Tags>
      </Info>
      <FooterButton>
        <ButtonBig>Marcar Horário</ButtonBig>
      </FooterButton>
    </SectionMobile>
  );
}

export default Profile;
