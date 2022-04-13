import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { screenSizes } from '../../themes/theme';
import { Section, Nav, Article } from './styles';
import { TopBarPattern } from '../pattern';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getUsers } from '../../services/services';
import InfoProfile from './Info';
import Request from './Request';

function Profile() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);
  const [dataArr, setDataArr] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [connect, setConnect] = useState(false);
  const params = useParams();

  useEffect(() => {
    async function getByName() {
      const { data, isFetching }: any = await getUsers(
        `/profiles/findprofile?email=${params.email}`
      );
      if (data) {
        setDataArr(data);
        setLoading(isFetching);
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

  const setConnectCard = () => {
    setConnect(!connect);
  };

  console.log(dataArr);
  return (
    <main>
      {loading ? (
        <p>Carregando</p>
      ) : (
        <>
          <TopBarPattern flag={false} />
          <Section>
            <ProfileCard
              widthScreen={widthScreen}
              email={dataArr.email}
              userName={dataArr.userName}
              linksListDTO={dataArr.linksListDTO}
              setConnectCard={setConnectCard}
              connect={connect}
              occupation={
                dataArr.professionList.length > 0
                  ? dataArr.professionList[0].description
                  : ''
              }
            />
            <Article>
              {widthScreen > screenSizes.default ? (
                <Nav>
                  <Link to="/userslist">Lista de Usuários</Link>
                  <p>/</p>
                  <Link to="/">Perfil do Mentor</Link>
                </Nav>
              ) : null}

              {connect ? (
                <Request dataArr={dataArr} />
              ) : (
                <InfoProfile widthScreen={widthScreen} dataArr={dataArr} />
              )}
            </Article>
          </Section>
        </>
      )}
    </main>
  );
}

export default Profile;
