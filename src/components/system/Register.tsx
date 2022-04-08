import React, { useState } from 'react';
import {
  StyledModal,
  Button,
  H2,
  Input,
  Form,
  P,
  Article,
  Span,
} from './styles';
import { ButtonBig } from '../Button/styles';

type Props = {
  open: boolean;
  toggleModalLogin: Function;
  toggleModalRegister: Function;
};

function Register({ open, toggleModalLogin, toggleModalRegister }: Props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState(false);

  const resetValues = (): void => {
    setPassword('');
    setCheckPassword('');
    setCheckEmail(false);
  };

  const changeModal = (): void => {
    toggleModalLogin();
    toggleModalRegister();
    resetValues();
  };

  const closeModal = (): void => {
    toggleModalRegister();
    resetValues();
  };

  const validateEmail = (emailCheck: string): void => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setCheckEmail(!re.test(emailCheck));
  };

  const checkValues = (): boolean => {
    return (
      name === '' ||
      password === '' ||
      email === '' ||
      password !== checkPassword ||
      checkEmail
    );
  };

  return (
    <StyledModal isOpen={open}>
      <Form>
        <H2>
          Technical<strong>Share</strong>
        </H2>
        <Input
          autoFocus
          type="text"
          onChange={(e) => {
            return setName(e.target.value);
          }}
          placeholder="Nome"
        />
        <Input
          type="text"
          onChange={(e) => {
            return setEmail(e.target.value);
          }}
          onBlur={() => {
            validateEmail(email);
          }}
          placeholder="E-mail"
        />
        {checkEmail ? <Span>Por favor, digite um e-mail válido.</Span> : null}
        <Input
          type="password"
          onChange={(e) => {
            return setPassword(e.target.value);
          }}
          placeholder="Senha"
        />
        <Input
          type="password"
          onChange={(e) => {
            return setCheckPassword(e.target.value);
          }}
          placeholder="Repita a senha"
        />
        {password !== checkPassword ? <Span>Senhas diferentes</Span> : null}

        <ButtonBig type="submit" disabled={checkValues()}>
          Criar a minha conta
        </ButtonBig>

        <P>
          Já tem uma conta ?
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
            return closeModal();
          }}
        >
          Close me
        </Button>
      </Article>
    </StyledModal>
  );
}

export default Register;
