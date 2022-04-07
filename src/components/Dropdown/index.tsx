/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { DropdownContent, DropdownWrapper, FilterTag, SelectedFilters } from './styles';

type Props = {
  dropdownName: any;
  dropdownItens: any;
};

export const SelectedItens: any = [];

export function Dropdown({ dropdownName, dropdownItens }: Props) {
  const [dropdown, setDropdown] = useState('none');
  const [dropdown2, setDropdown2] = useState('none');
  const [dropdown3, setDropdown3] = useState('none');
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
        <span>{dropdownName[0]}</span>
        {dropdownItens[0].map((dropdownItem: any) => {
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
      <DropdownWrapper
        onClick={() => {
          return dropdown2 === 'none'
            ? setDropdown2('block')
            : setDropdown2('none');
        }}
      >
        <span>{dropdownName[1]}</span>
        {dropdownItens[1].map((dropdownItem: any) => {
          return (
            <DropdownContent
              display={dropdown2}
              onClick={() => {
                return handleClick(dropdownItem);
              }}
            >
              <p>{dropdownItem}</p>
            </DropdownContent>
          );
        })}
      </DropdownWrapper>
      <DropdownWrapper
        onClick={() => {
          return dropdown3 === 'none'
            ? setDropdown3('block')
            : setDropdown3('none');
        }}
      >
        <span>{dropdownName[2]}</span>
        {dropdownItens[2].map((dropdownItem: any) => {
          return (
            <DropdownContent
              display={dropdown3}
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
