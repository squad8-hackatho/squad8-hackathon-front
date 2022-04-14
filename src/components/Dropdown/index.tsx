import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { theme } from '../../themes/theme';
import DropdownArea from './Forms/Areas';
import DropdownTechnologies from './Forms/Technologies';
import { Container, Form, Icon } from './styles';

type Props = {
  techFilter: any;
  setTechFilter: any;
};

export function NewDropdown({ techFilter, setTechFilter }: Props) {
  const AreaDefault = 'Todas as áreas';
  const TechDefault = 'Todas as tecnologias';

  const handleInputChange = (e: any) => {
    if (e.target.value === AreaDefault || e.target.value === TechDefault) {
      setTechFilter({ area: '', technologie: '' });
    } else {
      e.preventDefault();
      const { value, name } = e.target;
      setTechFilter({ ...techFilter, [name]: value });
    }
  };

  return (
    <Container>
      <Form>
        <DropdownArea AreaDefault={AreaDefault} onChange={handleInputChange} />
        <Icon>
          <RiArrowDownSLine color={theme.colors.blackGray} />
        </Icon>
        <DropdownTechnologies
          TechDefault={TechDefault}
          state={techFilter.area}
          onChange={handleInputChange}
        />
        <Icon>
          {' '}
          <RiArrowDownSLine color={theme.colors.blackGray} />{' '}
        </Icon>
      </Form>
    </Container>
  );
}
