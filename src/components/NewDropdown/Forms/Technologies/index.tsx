/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';
import { getUsers } from '../../../../services/services';
import { Select } from '../../styles';

type Props = {
  TechDefault: string;
  state: Object;
  onChange: any;
};

function DropdownTechnologies({ TechDefault, state, onChange = () => {} }: Props) {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    let dataOutside: any = [];

    async function getData() {
      const data = await getUsers('/skill');
      dataOutside = data.data;
      const sortedData = dataOutside.sort((a: any, b: any) =>
        {return a.skill.localeCompare(b.skill)}
      );
      const filteredTechnologies: any = [];     

      sortedData.forEach((tech: any) => {
        if (Object.values(tech).indexOf(`${state}`) > -1) {
          filteredTechnologies.push(tech.skill);
        }
      });
      setTechnologies(filteredTechnologies);
    }
    
    getData();
  }, [state]);

  return (
    <Select name="technologie" onChange={onChange}>
      <option>{TechDefault}</option>
      {technologies.map((technologie: any) => {
        return (
          <option key={technologie} value={technologie}>
            {technologie}
          </option>
        );
      })}
    </Select>
  );
}

export default DropdownTechnologies;
