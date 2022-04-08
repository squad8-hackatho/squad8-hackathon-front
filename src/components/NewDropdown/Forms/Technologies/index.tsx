/* eslint-disable no-prototype-builtins */
import React, { useState } from 'react';
import { MochTechnologies, MochTechnologiesFiltered } from '../../mochs';

type Props = {
  state: Object;
  onChange: any;
};

function DropdownTechnologies({ state, onChange = () => {} }: Props) {
  const [technologies, setTechnologies] = useState(MochTechnologies);

  function handleClick() {
    if (Object.values(state).indexOf('DEV') > -1) {
      setTechnologies(MochTechnologiesFiltered.DEV);
    } else {
      setTechnologies(MochTechnologies);
    }
  }

  return (
    <select name="technologie" onChange={onChange} onClick={handleClick}>
      <option>Selecione uma tecnologia:</option>
      {technologies.map((technologie: any) => {
        const { acronym, name } = technologie;
        return (
          <option key={acronym || name} value={acronym}>
            {name}
          </option>
        );
      })}
    </select>
  );
}

export default DropdownTechnologies;
