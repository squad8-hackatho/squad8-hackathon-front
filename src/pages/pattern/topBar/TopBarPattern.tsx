import React, { useEffect, useState } from 'react';
import { theme } from '../../../themes/theme';
import ProfileButton from '../../../components/ProfileButton/ProfileButton';

import { Container, Header, Search, SearchHR, TopBar, H3 } from './styles';

const defaultProps = {
  setSortByName: null,
};

type props = {
  flag: boolean;
  setSortByName?: any;
} & typeof defaultProps;

function TopBarPattern({ flag, setSortByName }: props) {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <Container flag={flag}>
      <Header>
        <TopBar>
          {flag ? <ProfileButton /> : null}
          {widthScreen > theme.screenSizes.mobileL ? (
            <H3 flag={widthScreen > theme.screenSizes.mobileL}>
              Technical<strong>Share</strong>
            </H3>
          ) : (
            <H3 flag={widthScreen > theme.screenSizes.mobileL}>
              Tech<strong>Share</strong>
            </H3>
          )}
        </TopBar>

        {flag ? (
          <SearchHR>
            <Search
              onChange={(e) => {
                return setSortByName(e.target.value);
              }}
              placeholder="Procure o seu mentor aqui"
            />
            <hr />
          </SearchHR>
        ) : null}
      </Header>
    </Container>
  );
}

TopBarPattern.defaultProps = defaultProps;
export default TopBarPattern;
