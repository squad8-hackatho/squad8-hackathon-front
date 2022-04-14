import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main, Button, H2, Input, Form, P } from './styles';
import { LoginButton } from '../../components/Button/styles';
import BannerPattern from '../../components/banner/Banner';
import { fetchUser } from '../../redux/userSlice';

function Login() {
  const [, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const result: any = await dispatch(fetchUser(email));

    if (result.payload) {
      navigate('/usersList');
    }
  };

  return (
    <Main>
      <BannerPattern />
      <Form
        onSubmit={(e) => {
          e.preventDefault();
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

        <LoginButton type="submit">Entrar</LoginButton>

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
