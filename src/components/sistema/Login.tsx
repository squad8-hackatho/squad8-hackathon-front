import React from 'react';
import { StyledModal, Button, H2, Input, Form, P, Article } from './styles';
import { ButtonBig } from '../Button/styles';

type Props = {
  open: boolean;
  toggleModalLogin: Function;
  toggleModalRegister: Function;
};

function Login({ open, toggleModalLogin, toggleModalRegister }: Props) {
  const changeModal = () => {
    toggleModalLogin();
    toggleModalRegister();
  };

  return (
    <StyledModal isOpen={open}>
      <Form>
        <H2>
          Technical<strong>Share</strong>
        </H2>
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />

        <ButtonBig type="submit">Entrar</ButtonBig>

        <P>
          Não tem uma conta ?{' '}
          <Button
            type="button"
            onClick={() => {
              return changeModal();
            }}
          >
            Cadastre-se
          </Button>
        </P>
      </Form>
      <Article>
        <Button
          data-dismiss="modal"
          onClick={() => {
            return toggleModalLogin();
          }}
        >
          Close me
        </Button>
      </Article>
    </StyledModal>
  );
}

export default Login;
