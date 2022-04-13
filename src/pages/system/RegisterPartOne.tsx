import React, { useEffect, useState } from 'react';
import { H3, Input, Section, Span /* TextArea */ } from './styles';
import { ButtonBig } from '../../components/Button/styles';

type props = {
  setName: Function;
  // setBio: Function;
  setPassword: Function;
  setEmail: Function;
  setNext: Function;
  password: string;
  email: string;
  name: string;
};

function Register({
  setName,
  setPassword,
  setEmail,
  password,
  email,
  name,
  setNext,
}: props) {
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState('');

  const validateEmail = (emailCheck: string): void => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setCheckEmail(!re.test(emailCheck));
  };

  useEffect(() => {
    // setPassword('');
    // setCheckPassword('');
    // setCheckEmail(false);
  }, []);

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
    <Section>
      <H3>Nome*</H3>
      <Input
        autoFocus
        type="text"
        onChange={(e) => {
          return setName(e.target.value);
        }}
        placeholder="Nome"
      />

      <H3>E-mail*</H3>
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

      <H3>Senha*</H3>
      <Input
        type="password"
        onChange={(e) => {
          return setPassword(e.target.value);
        }}
        placeholder="Senha"
      />

      <H3>Confirme sua senha*</H3>
      <Input
        type="password"
        onChange={(e) => {
          return setCheckPassword(e.target.value);
        }}
        placeholder="Repita a senha"
      />
      {password !== checkPassword ? <Span>Senhas diferentes</Span> : null}

      <ButtonBig
        disabled={checkValues()}
        onClick={() => {
          setNext(true);
        }}
      >
        Próximo
      </ButtonBig>
    </Section>
  );
}

export default Register;
