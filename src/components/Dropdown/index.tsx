import React, { useState } from 'react';
import { DropdownContent, DropdownWrapper } from './styles';

type Props = {
  dropdownName: string;
  dropdownItens: any;
};

export const SelectedItens: any = [];
// eslint-disable-next-line import/no-mutable-exports
export let whatIsSelected = [];

export function Dropdown({ dropdownName, dropdownItens }: Props) {
  const [dropdown, setDropdown] = useState('none');
  const [selectedItens, setSelectedItens] = useState([]);

  function handleClick(item: any) {
    if (SelectedItens.includes(item)) {
      /* const x : any = item.target.getAttribute(selectedItens);
      setSelectedItens(selectedItens.filter(items=>{return items !== x})) */
      const index = SelectedItens.indexOf(item);
      SelectedItens.splice(index, 1);
      setSelectedItens(SelectedItens);
      whatIsSelected = selectedItens;
    } else {
      SelectedItens.push(item);
      setSelectedItens(SelectedItens);      
      whatIsSelected = selectedItens;
    }
  }

  return (
    <div>
      <p>{selectedItens}</p>
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
