/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import DropdownArea from './Forms/Areas';
import DropdownTechnologies from './Forms/Technologies';
import { Container, Form } from './styles';

export function NewDropdown() {

  const [formValues, setFormValues] = useState({});
  
  const handleInputChange = (e : any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({...formValues, [name]: value})
  }

  return (
    <Container>
      <Form>
        <label>Área:</label>
        <DropdownArea onChange={handleInputChange}/>
        <label>Tecnologia:</label>
        <DropdownTechnologies />
      </Form>
    </Container>
  );
}
