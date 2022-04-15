import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { screenSizes } from '../../themes/theme';
import { Section, Nav, Article, Main } from './styles';
import { TopBarProfile } from '../../components/topBar';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getUsers } from '../../services/services';
import InfoProfile from './Info';
import Request from './Request';
import Loading from '../../components/Loading';

function Profile() {
  const currentUser = useSelector((state: any) => {
    return state;
  });
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);
  const [dataArr, setDataArr] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [connect, setConnect] = useState(currentUser.request);
  const params = useParams();

  useEffect(() => {
    async function getByName() {
      const { data, isFetching }: any = await getUsers(
        `/profiles/findprofile?email=${params.email}`,
        currentUser.authorization
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

  return currentUser.isLogged ? (
    <Main>
      <TopBarProfile email={params.email} />
      {loading ? (
        <Loading />
      ) : (
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
            {widthScreen > screenSizes.ipadMini ? (
              <Nav>
                <Link to="/userslist">Lista de Usuários</Link>
                <p>/</p>
                <Link to="/">Perfil do Mentor</Link>
              </Nav>
            ) : null}

            {connect ? (
              <Request dataArr={dataArr} />
            ) : (
              <InfoProfile
                setConnectCard={setConnectCard}
                widthScreen={widthScreen}
                dataArr={dataArr}
              />
            )}
          </Article>
        </Section>
      )}
    </Main>
  ) : (
    <Navigate to="/login" />
  );
}

export default Profile;
