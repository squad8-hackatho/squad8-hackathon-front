import React, { useEffect, useState } from 'react';
import { Capitalize } from '../../../../helpers/Capitalize';
import { getUsers } from '../../../../services/services';

type Props = {
  onChange: any;
};

function DropdownArea({ onChange = () => {} }: Props) {
  const [areas, setAreas] = useState(['Frontend', 'Programação', 'Softskill']);

  useEffect(() => {
    let dataOutside : any = [];

    async function getValues() {
      const data = await getUsers('/skill');
      dataOutside = data.data;

      const uniqueAreas: any = [];
      dataOutside.forEach((area: any) => {
        if (!uniqueAreas.includes(Capitalize(area.subcategory))) {
          uniqueAreas.push(Capitalize(area.subcategory));
        }
      });
      setAreas(uniqueAreas);
    }
    getValues();
  }, []);

  return (
    <select name="area" onChange={onChange}>
      <option> Selecione uma área: </option>
      {areas.map((area) => {
        return(
          <option key={area} value={area}>
            {area}
          </option>
        )
      })}
    </select>
  );
}

export default DropdownArea;
