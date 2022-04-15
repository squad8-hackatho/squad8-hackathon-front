import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../../../../services/services';
import { Select } from '../../styles';

type Props = {
  TechDefault: string;
  value: Object;
  onChange: any;
};

function DropdownTechnologies({
  TechDefault,
  value,
  onChange = () => {},
}: Props) {
  const [technologies, setTechnologies] = useState([]);
  const currentUser = useSelector((state: any) => {
    return state;
  });

  useEffect(() => {
    let dataOutside: any = [];

    async function getData() {
      const data = await getUsers('/skill', currentUser.authorization);
      dataOutside = data.data;
      const sortedData = dataOutside.sort((a: any, b: any) => {
        return a.skill.localeCompare(b.skill);
      });
      const filteredTechnologies: any = [];

      sortedData.forEach((tech: any) => {
        if (Object.values(tech).indexOf(`${value}`) > -1) {
          filteredTechnologies.push(tech.skill);
        }
      });
      setTechnologies(filteredTechnologies);
    }

    getData();
  }, [value]);

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
