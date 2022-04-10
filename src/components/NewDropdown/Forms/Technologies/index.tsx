/* eslint-disable no-prototype-builtins */
import React, { useEffect, useState } from 'react';
import { Capitalize } from '../../../../helpers/Capitalize';
import { getUsers } from '../../../../services/services';

type Props = {
  state: Object;
  onChange: any;
};

function DropdownTechnologies({ state, onChange = () => {} }: Props) {
  const [technologies, setTechnologies] = useState(['Java', 'LELEU']);

  useEffect(() => {    
    let dataOutside: any = [];

    async function getData() {
      const data = await getUsers('/skill');
      dataOutside = data.data;

      const filteredTechnologies: any = [];
      dataOutside.forEach((tech : any) => {
        if (Object.values(tech).indexOf(`${state}`) > -1) {
          filteredTechnologies.push(Capitalize(tech.skill));
        }
      });      
      setTechnologies(filteredTechnologies);
    }

    getData();
  }, [state]);

  return (
    <select name="technologie" onChange={onChange}>
      <option>Selecione uma tecnologia:</option>
      {technologies.map((technologie: any) => {
        return (
          <option key={technologie} value={technologie}>
            {technologie}
          </option>
        );
      })}
    </select>
  );
}

export default DropdownTechnologies;
