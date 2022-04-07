import React, { useState } from 'react';
import { DropdownContent, DropdownWrapper, FilterTag, SelectedFilters } from './styles';

type Props = {
  dropdownName: string;
  dropdownItens: any;
};

export const SelectedItens: any = [];

export function Dropdown({ dropdownName, dropdownItens }: Props) {
  const [dropdown, setDropdown] = useState('none');
  const [selectedItens, setSelectedItens] = useState([]);

  function handleClick(item: any) {
    if (SelectedItens.includes(item)) {
      const index = SelectedItens.indexOf(item);
      SelectedItens.splice(index, 1);
      setSelectedItens(SelectedItens);
    } else {
      SelectedItens.push(item);
      setSelectedItens(SelectedItens);
    }
  }

  return (
    <div>
      <SelectedFilters>
        {selectedItens.map((selected : any) => {
          return (
            <FilterTag>{selected}</FilterTag>
          )
        })}
      </SelectedFilters>
      <DropdownWrapper
        onClick={() => {
          return dropdown === 'none'
            ? setDropdown('block')
            : setDropdown('none');
        }}
      >
        <span>{dropdownName}</span>
        {dropdownItens.map((dropdownItem: any) => {
          return (
            <DropdownContent
              display={dropdown}
              onClick={() => {
                return handleClick(dropdownItem);
              }}
            >
              <p>{dropdownItem}</p>
            </DropdownContent>
          );
        })}
      </DropdownWrapper>
    </div>
  );
}
