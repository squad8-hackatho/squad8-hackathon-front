import React, { useEffect, useState } from 'react';
import { Capitalize } from '../../../../helpers/Capitalize';
import { getUsers } from '../../../../services/services';
import { Select } from '../../styles';

type Props = {
  onChange: any;
  AreaDefault: string;
};

function DropdownArea({ AreaDefault, onChange = () => {} }: Props) {
  const [areas, setAreas] = useState(['Frontend', 'Programação', 'Softskill']);

  useEffect(() => {
    let dataOutside: any = [];

    async function getValues() {
      const data = await getUsers('/skill');
      dataOutside = data.data;

      const uniqueAreas: any = [];
      dataOutside.forEach((area: any) => {
        if (!uniqueAreas.includes(Capitalize(area.area))) {
          uniqueAreas.push(area.area);
        }
      });
      setAreas(uniqueAreas);
    }
    getValues();
  }, []);

  return (
    <Select name="area" onChange={onChange}>
      <option>{AreaDefault}</option>
      {areas.map((area) => {
        return (
          <option key={area} value={area}>
            {area}
          </option>
        );
      })}
    </Select>
  );
}

export default DropdownArea;
