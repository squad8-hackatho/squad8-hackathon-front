import React, { useState } from 'react';
import { MochAreas } from '../../mochs';

type Props = {
  onChange: any;
};

function DropdownArea({ onChange = () => {} }: Props) {
  const [areas, setAreas] = useState(MochAreas);

  function handleClick() {
    setAreas(areas);
  }

  return (
    <select onChange={onChange}>
      <option onClick={handleClick}>Selecione uma área:</option>
      {areas.map((area: any) => {
        const { acronym, name } = area;
        return (
          <option key={acronym} value={acronym}>
            {name}
          </option>
        );
      })}
    </select>
  );
}

export default DropdownArea;
