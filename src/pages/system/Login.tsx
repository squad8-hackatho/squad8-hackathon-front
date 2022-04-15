/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Main, Button, H2, Input, Form, P, Span } from './styles';
import { LoginButton } from '../../components/Button/styles';
import BannerPattern from '../../components/Banner/Banner';
import { fetchUser } from '../../redux/userSlice';
import { login } from '../../services/services';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    const obj = {
      email,
      password,
    };
    const authorization = await login(obj);
    if (authorization.isFetching) {
      setFlag(false);
      const result: any = await dispatch(fetchUser(authorization.data));
      if (result.payload) {
        navigate('/usersList');
      }
    } else {
      setFlag(true);
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
        {flag ? <Span>Dados Incorretos</Span> : null}

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
