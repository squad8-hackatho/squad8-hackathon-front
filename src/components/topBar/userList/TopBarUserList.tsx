import React, { useEffect, useState } from 'react';
import { theme } from '../../../themes/theme';
import ProfileButton from '../../ProfileButton/ProfileButton';

import { Container, Header, Search, SearchHR, TopBar } from './styles';

type props = {
  setSortByName: any;
};

function TopBarPattern({ setSortByName }: props) {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <Container>
      <Header>
        <TopBar>
          <ProfileButton />
          {widthScreen > theme.screenSizes.mobileL ? (
            <h3>
              Technical<strong>Share</strong>
            </h3>
          ) : (
            <h3>
              Tech<strong>Share</strong>
            </h3>
          )}
        </TopBar>
        <SearchHR>
          <Search
            onChange={(e) => {
              return setSortByName(e.target.value);
            }}
            placeholder="Procure o seu mentor aqui"
          />
          <hr />
        </SearchHR>
      </Header>
    </Container>
  );
}

export default TopBarPattern;
