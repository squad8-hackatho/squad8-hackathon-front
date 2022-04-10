import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Main, Button, H2, Input, Form, P } from './styles';
import { ButtonBig } from '../../components/Button/styles';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (): void => {
    console.log(password, email);
  };

  return (
    <Main>
      <Form
        onSubmit={() => {
          return onSubmit();
        }}
      >
        <H2>
          Technical<strong>Share</strong>
        </H2>
        <Input
          type="text"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
          placeholder="E-mail"
        />
        <Input
          type="password"
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
          placeholder="Senha"
        />

        <ButtonBig type="submit">Entrar</ButtonBig>

        <P>
          Não tem uma conta ?{' '}
          <Link to="/register">
            <Button
              type="button"
              onClick={() => {
                // return changeModal();
              }}
            >
              Cadastre-se
            </Button>
          </Link>
        </P>
      </Form>
    </Main>
  );
}

export default Login;
