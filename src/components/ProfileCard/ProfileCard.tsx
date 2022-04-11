import React from 'react';
import { Section, Article, ProfilePicture, P, H1 } from './styles';
import { ButtonBig } from '../Button/styles';
import { screenSizes } from '../../themes/theme';
import foto from '../../assets/foto.png';

type props = {
  widthScreen: number;
};

function ProfileCard({ widthScreen }: props) {
  const nome = 'Fulano de tal';
  const area = 'Dev';

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
        <ButtonBig>Quero me conectar</ButtonBig>
      ) : null}
    </Section>
  );
}

export default ProfileCard;
