/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { H3, Input, Section, TextArea } from './styles';
import { ButtonBig } from '../../components/Button/styles';

type props = {
  setLinkedin: Function;
  setNumero: Function;
  setBio: Function;
  numero: string;
  linkedin: string;
};

function Register({ setLinkedin, setNumero, setBio, numero, linkedin }: props) {
  const checkValues = (): boolean => {
    return numero === '' || linkedin === '';
  };

  return (
    <Section>
      <H3>Biografia</H3>
      <TextArea
        maxLength={350}
        onChange={(e) => {
          return setBio(e.target.value);
        }}
        placeholder="Bio"
      />

      <H3>Número*</H3>
      <Input
        type="text"
        onChange={(e) => {
          setNumero(e.target.value);
        }}
        placeholder="(XX) XXXXX-XXXX"
      />

      <H3>Linkedin*</H3>
      <Input
        type="text"
        onChange={(e) => {
          setLinkedin(e.target.value);
        }}
        placeholder="Linkedin"
      />

      <ButtonBig type="submit" disabled={checkValues()}>
        Criar a minha conta
      </ButtonBig>
    </Section>
  );
}

export default Register;
