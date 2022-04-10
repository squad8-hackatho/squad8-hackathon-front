import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../../../helpers/Capitalize';
import { MochApi } from '../../mochs';

type Props = {
  onChange: any;
};

function DropdownArea({ onChange = () => {} }: Props) {
  const [areas, setAreas] = useState(['Frontend', 'Programação', 'Softskill']);

  function handleClick() {
    const areaBack = MochApi;
    const uniqueAreas: any = [];
    areaBack.forEach((area) => {
      if (!uniqueAreas.includes(capitalizeFirstLetter(area.subcategory))) {
        uniqueAreas.push(capitalizeFirstLetter(area.subcategory));
      }
    });
    console.log('Direto', uniqueAreas);
    setAreas(uniqueAreas);
  }

  return (
    <select onClick={handleClick} name="area" onChange={onChange}>
      <option> Selecione uma área: </option>
      {areas.map((area: any) => {
        return (
          <option key={area} value={area}>
            {area}
          </option>
        );
      })}
    </select>
  );
}

export default DropdownArea;
