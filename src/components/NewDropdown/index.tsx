/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { LowerCase } from '../../helpers/LowerCase';
import DropdownArea from './Forms/Areas';
import DropdownTechnologies from './Forms/Technologies';
import { Container, Form, Icon } from './styles';

export function NewDropdown() {
  const [formValues, setFormValues] = useState({ area: '' });

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Container>
      <Form>
        <DropdownArea onChange={handleInputChange} />
        <Icon> <RiArrowDownSLine color="white" /> </Icon>
        <DropdownTechnologies
          state={LowerCase(formValues.area)}
          onChange={handleInputChange}
        />
        <Icon> <RiArrowDownSLine color="white" /> </Icon>
      </Form>
    </Container>
  );
}
