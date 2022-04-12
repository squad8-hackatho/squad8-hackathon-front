/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { theme } from '../../themes/theme';
import DropdownArea from './Forms/Areas';
import DropdownTechnologies from './Forms/Technologies';
import { Container, Form, Icon } from './styles';

type Props = {
  techFilter: any;
  setTechFilter: any;
}

export function NewDropdown({ techFilter, setTechFilter }: Props) {
  // const [formValues, setFormValues] = useState({ area: '' });

  const handleInputChange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setTechFilter({ ...techFilter, [name]: value });
  };

  return (
    <Container>
      <Form>
        <DropdownArea onChange={handleInputChange} />
        <Icon> <RiArrowDownSLine color={theme.colors.blackGray} /> </Icon>
        <DropdownTechnologies
          state={techFilter.area}
          onChange={handleInputChange}
        />
        <Icon> <RiArrowDownSLine color={theme.colors.blackGray} /> </Icon>
      </Form>
    </Container>
  );
}
