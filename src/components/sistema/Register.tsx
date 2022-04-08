import React from 'react';
import { StyledModal, Button, H2, Input, Form, P, Article } from './styles';
import { ButtonBig } from '../Button/styles';

type Props = {
  open: boolean;
  toggleModalLogin: Function;
  toggleModalRegister: Function;
};

function Register({ open, toggleModalLogin, toggleModalRegister }: Props) {
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
        <Input autoFocus type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Repita a senha" />

        <ButtonBig type="submit">Criar a minha conta</ButtonBig>

        <P>
          Já tem uma conta ?{' '}
          <Button
            type="button"
            onClick={() => {
              return changeModal();
            }}
          >
            Entrar
          </Button>
        </P>
      </Form>
      <Article>
        <Button
          data-dismiss="modal"
          onClick={() => {
            return toggleModalRegister();
          }}
        >
          Close me
        </Button>
      </Article>
    </StyledModal>
  );
}

export default Register;
