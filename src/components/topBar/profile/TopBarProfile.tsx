import React, { useEffect, useState } from 'react';
import { theme } from '../../../themes/theme';
// import ProfileButton from '../../../components/ProfileButton/ProfileButton';

import { Container, TopBar } from './styles';

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
          <h3>
            Technical<strong>Share</strong>
          </h3>
        ) : null}
      </TopBar>
    </Container>
  );
}

export default TopBarPattern;
