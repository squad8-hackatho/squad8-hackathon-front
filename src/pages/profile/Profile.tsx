/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { screenSizes } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';

import {
  Section,
  Article,
  Nav,
  FooterButton,
  Description,
  H2,
  Tags,
  Tag,
  Container,
  Info,
} from './styles';
import { TopBarPattern } from '../pattern';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

function Profile() {
  const [text, setText] = useState<string[]>([]);
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);
  const description = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  ];
  const hardSkill = ['react', 'js', 'ts'];
  const softSkill = ['Comunicação', 'Pensamento criativo'];
  const infos = ['Descrição', 'Hard Skill', 'Soft Skill'];

  useEffect(() => {
    setText(description);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <main>
      <TopBarPattern flag={false} />
      <Container>
        <Section>
          <ProfileCard widthScreen={widthScreen} />

          <Article>
            {widthScreen > screenSizes.default ? (
              <Nav>
                <Link to="/userslist">Lista de Usuários</Link>
                <p>/</p>
                <Link to="/">Perfil do Mentor</Link>
              </Nav>
            ) : null}

            <Description>
              <H2>Descrição</H2>
            </Description>
            <Info>
              <H2>Área</H2>
              <Tags>
                <Tag>HTML</Tag>
                <Tag>HTML</Tag>
                <Tag>HTML</Tag>
              </Tags>
            </Info>
            <Info>
              <H2>Tecnologias</H2>
              <Tags>
                <Tag>HTML</Tag>
                <Tag>HTML</Tag>
                <Tag>HTML</Tag>
              </Tags>
            </Info>

            {widthScreen < screenSizes.default ? (
              <FooterButton>
                <ButtonBig>Marcar Horário</ButtonBig>
              </FooterButton>
            ) : null}
          </Article>
        </Section>
      </Container>
    </main>
  );
}

export default Profile;
