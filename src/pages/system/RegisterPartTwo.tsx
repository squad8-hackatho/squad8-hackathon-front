import React, { useEffect, useState } from 'react';
import { H3, Input, Section, Select } from './styles';
import { ButtonBig } from '../../components/Button/styles';
import { getUsers } from '../../services/services';

type props = {
  setCargo: Function;
  setArea: Function;
};

function Register({ setCargo, setArea }: props) {
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

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    let dataOutside: any = [];

    async function getValues() {
      const data = await getUsers('/skill');
      dataOutside = data.data;

      const uniqueSkills: any = [];
      dataOutside.forEach((skill: any) => {
        if (!uniqueSkills.includes(skill.skill)) {
          uniqueSkills.push(skill.skill);
        }
      });
      setSkills(uniqueSkills);
    }
    getValues();
  }, []);

  return (
    <Section>
      <H3>Selecione a sua área de atuação</H3>
      <Input
        autoFocus
        type="text"
        onChange={(e) => {
          setCargo(e.target.value);
        }}
        placeholder="Área de atuação"
      />

      <H3>Cargo na FCamara</H3>
      <Input
        autoFocus
        type="text"
        onChange={(e) => {
          setArea(e.target.value);
        }}
        placeholder="Cargo na FCamera"
      />

      <H3>Selecione o nível do seu cargo</H3>
      <Select>
        <option value="valor1" selected>
          Nível do cargo
        </option>
        <option value="Estagiário">Estagiário</option>
        <option value="Trainee">Trainee</option>
        <option value="Júnior">Júnior</option>
        <option value="Pleno">Pleno</option>
        <option value="Senior">Senior</option>
      </Select>

      <H3>Selecione as suas habilidades</H3>
      <Select>
        <option value="valor1" selected>
          Suas habilidades
        </option>
        {skills.map((skill: any) => {
          return (
            <option value={skill} key={skill}>
              {skill}
            </option>
          );
        })}
      </Select>

      <ButtonBig type="submit" disabled={checkValues()}>
        Criar a minha conta
      </ButtonBig>
    </Section>
  );
}

export default Register;
