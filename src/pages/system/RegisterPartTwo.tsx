/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  H3,
  Input,
  Section,
  Select,
  Tag,
  Tags,
  Span,
  TextArea,
} from './styles';
import { ButtonBig } from '../../components/Button/styles';
import { getUsers } from '../../services/services';
import { setSelectedSkillToPost } from '../../helpers/setSelectedSkillsToPost';

type props = {
  setDescription: Function;
  setArea: Function;
  setSkills: Function;
  setLevel: Function;
  setLinkedin: Function;
  setNumero: Function;
  setBio: Function;
  area: string;
  level: string;
  description: string;
};

function Register({
  setDescription,
  setArea,
  setSkills,
  setLevel,
  setLinkedin,
  setNumero,
  description,
  level,
  area,
  setBio,
}: props) {
  const emptyArray: any = [];
  const [areasList, setAreasList] = useState([]);
  const [selectedArea, setSelectedArea] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState(emptyArray);
  const currentUser = useSelector((state: any) => {
    return state;
  });

  const checkValues = (): boolean => {
    return description === '' || level === '' || area === '';
  };

  useEffect(() => {
    let dataOutside: any = [];

    async function getValues() {
      const data = await getUsers('/skill', currentUser.authorization);
      dataOutside = data.data;

      const uniqueAreas: any = [];
      dataOutside.forEach((dataItem: any) => {
        if (!uniqueAreas.includes(dataItem.area)) {
          uniqueAreas.push(dataItem.area);
        }
      });
      setAreasList(uniqueAreas);

      const uniqueSkills: any = [];
      dataOutside.forEach((dataItem: any) => {
        if (Object.values(dataItem).includes(selectedArea)) {
          if (!uniqueSkills.includes(dataItem.skill)) {
            uniqueSkills.push(dataItem.skill);
          }
        }
      });
      setSkillsList(uniqueSkills);

      setSkills(
        setSelectedSkillToPost({ skillsList: selectedSkills, dataOutside })
      );
    }
    getValues();
  }, [selectedSkills, selectedArea]);

  function handleChange(event: any) {
    function filterSkill(skill: any) {
      return skill !== event.target.value;
    }
    if (selectedSkills.length < 5) {
      if (selectedSkills.includes(event.target.value)) {
        setSelectedSkills(selectedSkills.filter(filterSkill));
      } else {
        setSelectedSkills([...selectedSkills, event.target.value]);
      }
    }
  }

  function handleAreaChoice(event: any) {
    setSelectedArea(event.target.value);
  }

  return (
    <Section>
      <H3>Cargo na FCamara*</H3>
      <Input
        autoFocus
        type="text"
        onChange={(e) => {
          setArea(e.target.value);
        }}
        placeholder="Cargo na FCamera"
      />

      <H3>Descreva seu cargo*</H3>
      <Input
        type="text"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Adicione a descrição"
      />

      <H3>Selecione o nível do seu cargo*</H3>
      <Select
        onChange={(e) => {
          setLevel(e.target.value);
        }}
      >
        <option defaultValue="valor1">Nível do cargo</option>
        <option value="Não se aplica">Não se aplica</option>
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
      <Select onChange={handleAreaChoice}>
        <option defaultValue="default">Área</option>
        {areasList.map((areas: any) => {
          return (
            <option value={areas} key={areas}>
              {areas}
            </option>
          );
        })}
      </Select>

      <Select onChange={handleChange} disabled={selectedSkills.length === 4}>
        <option defaultValue="default">Habilidades</option>
        {skillsList.map((skill: any) => {
          return (
            <option value={skill} key={skill}>
              {skill}
            </option>
          );
        })}
      </Select>
      {selectedSkills.length === 4 ? (
        <Span>Quantidade máxima atingida</Span>
      ) : null}

      <H3>Biografia</H3>
      <TextArea
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
