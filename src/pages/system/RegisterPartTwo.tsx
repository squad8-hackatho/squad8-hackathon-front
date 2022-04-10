import React from 'react';
import { Input, Section, Select } from './styles';
import { ButtonBig } from '../../components/Button/styles';

type props = {
  setCargo: Function;
};

function Register({ setCargo }: props) {
  const checkValues = (): boolean => {
    // return (
    //   name === '' ||
    //   password === '' ||
    //   email === '' ||
    //   password !== checkPassword ||
    //   checkEmail
    // );
    return false;
  };

  return (
    <Section>
      <Input
        autoFocus
        type="text"
        onChange={(e) => {
          setCargo(e.target.value);
        }}
        placeholder="Cargo na FCamera"
      />

      <Select>
        <option value="valor1" selected>
          Nível do cargo
        </option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </Select>

      <Select>
        <option value="valor1" selected>
          Suas habilidades
        </option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
      </Select>

      <ButtonBig type="submit" disabled={checkValues()}>
        Criar a minha conta
      </ButtonBig>
    </Section>
  );
}

export default Register;
