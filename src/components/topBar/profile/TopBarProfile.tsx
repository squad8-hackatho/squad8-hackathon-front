import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as BsIcons from 'react-icons/bs';
import { theme } from '../../../themes/theme';
import ProfileButton from '../../ProfileButton/ProfileButton';

import { Container, TopBar, NavBar, Article } from './styles';

const defaultProps = {
  email: '',
};

type Props = {
  email?: string | undefined;
} & typeof defaultProps;

function TopBarPattern({ email }: Props) {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => {
    return state.user;
  });

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <Container>
      <TopBar>
        {widthScreen > theme.screenSizes.ipadMini ? (
          <NavBar>
            <Link to="/usersList" style={{ textDecoration: 'none' }}>
              <h3>
                Technical<strong>Share</strong>
              </h3>
            </Link>
            {currentUser.email === email ? (
              <Article>
                <p>Agendamentos:</p>
                <BsIcons.BsCalendarCheck
                  onClick={() => {
                    navigate('/schedule');
                  }}
                  size={40}
                />
              </Article>
            ) : null}
          </NavBar>
        ) : (
          <>
            <ProfileButton size={25} />
            <Link to="/userslist">
              <BsIcons.BsArrowLeft size={28} color="black" />
              {/* <Button>Voltar</Button> */}
            </Link>
          </>
        )}
      </TopBar>
    </Container>
  );
}

TopBarPattern.defaultProps = defaultProps;
export default TopBarPattern;
