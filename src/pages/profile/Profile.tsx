import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Section,
  ButtonsBar,
  Article,
  Li,
  Nav,
  Ul,
  FooterButton,
} from './styles';
import { screenSizes } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';
import { TopBarPattern } from '../pattern';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import ProfileInfo from '../../components/ProfileInfo/ProfileInfo';

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

  const setInfo = (typeName: string): void => {
    if (typeName === 'Descrição') setText(description);
    else if (typeName === 'Hard Skill') setText(hardSkill);
    else setText(softSkill);
  };

  return (
    <main>
      <TopBarPattern flag={false} />
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

          <ButtonsBar id="ButtonsBar">
            {infos.map((item) => {
              return (
                <ProfileInfo
                  widthScreen={widthScreen}
                  key={item}
                  setInfo={() => {
                    return setInfo(item);
                  }}
                >
                  {item}
                </ProfileInfo>
              );
            })}
          </ButtonsBar>
          <Ul>
            {text.map((item) => {
              return <Li key={item}>{item}</Li>;
            })}
          </Ul>
        </Article>
        {widthScreen < screenSizes.default ? (
          <FooterButton>
            <ButtonBig>Quero me conectar</ButtonBig>
          </FooterButton>
        ) : null}
      </Section>
    </main>
  );
}

export default Profile;
