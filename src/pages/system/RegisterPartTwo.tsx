/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { H3, Input, Section, Select, Tag, Tags } from './styles';
import { ButtonBig } from '../../components/Button/styles';
import { getUsers } from '../../services/services';
import { setSelectedSkillToPost } from '../../helpers/setSelectedSkillsToPost';

type props = {
  setCargo: Function;
  setArea: Function;
  onSubmit: Function;
  setSkills: Function;
  setLevel: Function;
};

function Register({ setCargo, setArea, onSubmit, setSkills, setLevel }: props) {
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

  const emptyArray: any = [];
  const [skillsList, setSkillsList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(emptyArray);

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
      setSkillsList(uniqueSkills);
      
      setSkills(
        setSelectedSkillToPost({ skillsList: selectedSkills, dataOutside })
      );
    }
    getValues();
  }, [selectedSkills]);

  function handleChange(event: any) {
    function filterSkill(skill: any) {
      return skill !== event.target.value;
    }
    if (selectedSkills.includes(event.target.value)) {
      setSelectedSkills(selectedSkills.filter(filterSkill));
    } else {
      setSelectedSkills([...selectedSkills, event.target.value]);
    }
  }

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
      <Select
        onChange={(e) => {
          setLevel(e.target.value);
        }}
      >
        <option value="valor1" selected>
          Nível do cargo
        </option>
        <option value="Estagiário">Estagiário</option>
        <option value="Trainee">Trainee</option>
        <option value="Júnior">Júnior</option>
        <option value="Pleno">Pleno</option>
        <option value="Senior">Senior</option>
      </Select>
        
      <Tags>
        {selectedSkills.map((skill: any) => {
          return (
            <Tag
              key={skill}
              onClick={() => {
                function filterSkill(tag: any) {
                  return tag !== skill;
                }
                return setSelectedSkills(selectedSkills.filter(filterSkill));
              }}
            >
              {skill}
            </Tag>
          );
        })}
      </Tags>

      <H3>Selecione as suas habilidades</H3>
      <Select onChange={handleChange}>
        <option value="default" selected>
          Suas habilidades
        </option>
        {skillsList.map((skill: any) => {
          return (
            <option value={skill} key={skill}>
              {skill}
            </option>
          );
        })}
      </Select>

      <ButtonBig
        type="submit"
        onClick={() => {
          onSubmit();
        }}
        disabled={checkValues()}
      >
        Criar a minha conta
      </ButtonBig>
    </Section>
  );
}

export default Register;
