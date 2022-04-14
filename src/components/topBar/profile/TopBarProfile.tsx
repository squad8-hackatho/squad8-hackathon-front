import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../../themes/theme';
import ProfileButton from '../../ProfileButton/ProfileButton';

import { Container, TopBar, Button } from './styles';

function TopBarPattern() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <Container>
      <TopBar>
        {widthScreen > theme.screenSizes.mobileL ? (
          <Link to="/usersList" style={{ textDecoration: 'none' }}>
            <h3>
              Technical<strong>Share</strong>
            </h3>
          </Link>
        ) : (
          <>
            <ProfileButton size={25} />
            <Link to="/userslist">
              <Button>Voltar</Button>
            </Link>
          </>
        )}
      </TopBar>
    </Container>
  );
}

export default TopBarPattern;