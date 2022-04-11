import React from 'react';
// import { screenSizes } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';
import {
  Article,
  H2,
  Info,
  Input,
  Textarea,
  FooterButton,
  CheckBox,
  P,
} from './styles';

type props = {
  dataArr: any;
  widthScreen: number;
};

function Profile({ dataArr, widthScreen }: props) {
  console.log(dataArr, widthScreen);
  return (
    <Article>
      <Info>
        <H2>Assunto</H2>
        <Input placeholder="Digite o assunto da sua requisição" />
      </Info>
      <Info>
        <H2>Conceitos Chaves</H2>
        <Input placeholder="" />
      </Info>
      <Info>
        <CheckBox type="checkbox" />
        <P>Apresentar solicitação com urgência.</P>
      </Info>
      <Info>
        <H2>Mensagem</H2>
        <Textarea placeholder="Digite uma mensagem para o mentor" />
      </Info>

      <FooterButton>
        <ButtonBig>Enviar</ButtonBig>
      </FooterButton>
    </Article>
  );
}

export default Profile;
