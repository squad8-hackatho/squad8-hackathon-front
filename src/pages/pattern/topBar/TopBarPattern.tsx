import React, { useEffect, useState } from 'react';
import Button from '../../../components/Button/styles';
import { theme } from '../../../themes/theme';

import { Buttons, Header, LogoAndUserLogin, Search } from './styles';

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
    <Header>
      {widthScreen > theme.screenSizes.default ? (
        <LogoAndUserLogin>
          <h3>
            Technical<strong>Share</strong>
          </h3>
          <Buttons>
            <Button
              width={134}
              height={44}
              p={0}
              borderRadius={8}
              marginRight={11}
            >
              Cadastrar-se
            </Button>
            <Button width={134} height={44} p={0} borderRadius={8}>
              Entrar
            </Button>
          </Buttons>
        </LogoAndUserLogin>
      ) : null}

      {flag ? (
        <>
          <Search
            onChange={(e) => {
              return setSortByName(e.target.value);
            }}
            placeholder="Procure o seu mentor aqui"
          />
          <hr />
        </>
      ) : null}
    </Header>
  );
}

TopBarPattern.defaultProps = defaultProps;
export default TopBarPattern;
