import React from 'react';
import Button from '../../../components/Button/styles';

import { Header, LogoAndUserLogin, Search } from './styles';

type types = {
  flag: boolean;
};

function TopBarPattern(props: types) {
  const { flag } = props;
  return (
    <Header>
      <LogoAndUserLogin>
        <h3>
          Technical<strong>Share</strong>
        </h3>
        <Button width={134} height={44} p={0} borderRadius={8} marginRight={11}>
          Cadastrar-se
        </Button>
        <Button width={134} height={44} p={0} borderRadius={8}>
          Entrar
        </Button>
      </LogoAndUserLogin>
      {flag ? (
        <>
          <Search placeholder="Procure o seu mentor aqui" />
          <hr />
        </>
      ) : null}
    </Header>
  );
}

export default TopBarPattern;
