import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
import { getUsers } from '../../services/services';

function Profile() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);
  const [dataArr, setDataArr] = useState<any>();
  const params = useParams();

  useEffect(() => {
    async function getByName() {
      const { data }: any = await getUsers(
        `/profiles/findprofile?email=${params.email}`
      );
      if (data) {
        setDataArr(data);
      }
    }
    getByName();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  const getTags = (value: string) => {
    return dataArr.expertiseList.map((item: any) => {
      if (value === 'area') return <Tag key={uuidv4()}>{item.area}</Tag>;

      return <Tag key={uuidv4()}>{item.skill}</Tag>;
    });
  };

  return (
    <main>
      <TopBarPattern flag={false} />
      <Container>
        <Section>
          <ProfileCard
            widthScreen={widthScreen}
            email={dataArr.email}
            userName={dataArr.userName}
            linksListDTO={dataArr.linksListDTO}
            professionList={dataArr.professionList}
          />

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
              {dataArr.bio}
            </Description>
            <Info>
              <H2>Área</H2>
              <Tags>{getTags('area')}</Tags>
            </Info>
            <Info>
              <H2>Tecnologias</H2>
              <Tags>
                <Tags>{getTags('skill')}</Tags>
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
