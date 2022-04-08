import React, { useState } from 'react';
import { MochTechnologies } from '../../mochs';

function DropdownTechnologies() {
  const [technologies, setTechnologies] = useState(MochTechnologies);

  function handleClick() {
    setTechnologies(technologies);
  }

  return (
    <select>
      <option onClick={handleClick}>Selecione uma tecnologia:</option>
      {technologies.map((technologie) => {
        const { acronym, name } = technologie;
        return(
          <option key={acronym} value={acronym}>{name}</option>
        )
      })}
    </select>
  );
}

export default DropdownTechnologies;
