import React from 'react';
import { Section, Article, ProfilePicture, P, H1, Contact } from './styles';
import { ButtonBig } from '../Button/styles';
import { screenSizes } from '../../themes/theme';
import foto from '../../assets/foto.png';

type props = {
  widthScreen: number;
};

function ProfileCard({ widthScreen }: props) {
  const nome = 'Fulano de tal';
  const area = 'Dev';
  const numero = '(XX) XXXXX - XXXX';
  const email = 'test@gmail.com';
  const linkedin = 'br.linkedin.com';

  return (
    <Section>
      <ProfilePicture src={foto} />
      <Article>
        <H1>{nome}</H1>
        <P>
          <strong>Cargo:</strong> {area}
        </P>
      </Article>
      {widthScreen > screenSizes.default ? (
        <>
          <ButtonBig>Quero me conectar</ButtonBig>

          <Contact>
            <P>
              <strong>{numero}</strong>
            </P>
            <P>
              <strong>{email}</strong>
            </P>
            <P>
              <strong>{linkedin}</strong>
            </P>
          </Contact>
        </>
      ) : null}
    </Section>
  );
}

export default ProfileCard;
