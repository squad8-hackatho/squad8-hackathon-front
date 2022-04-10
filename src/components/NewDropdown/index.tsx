/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { LowerCase } from '../../helpers/LowerCase';
import DropdownArea from './Forms/Areas';
import DropdownTechnologies from './Forms/Technologies';
import { Container, Form } from './styles';

export function NewDropdown() {
  const [formValues, setFormValues] = useState({area: ''});

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <Container>
      <Form>
        <label>Área:</label>
        <DropdownArea onChange={handleInputChange} />
        <label>Tecnologia:</label>
        <DropdownTechnologies state={LowerCase(formValues.area)} onChange={handleInputChange} />
      </Form>
    </Container>
  );
}
