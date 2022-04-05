/* eslint-disable no-sequences */
import React from 'react';
import Tag from '../../components/Tag';
import { Card, Container, TagContainer, H2 } from './styles';
import { ButtonBig } from '../../components/Button/styles';

function AreasOfInterest() {
  const areas = [
    'Programação',
    'Marketing',
    'UX Design',
    'UI Design',
    'test',
    'test',
    'test',
    'test',
    'test',
    'test',
  ];

  return (
    <Container>
      <Card>
        <H2>
          Em qual ou quais <strong>áreas da tecnologia</strong> você possui
          interesse em aprender?
        </H2>
        <TagContainer>
          {areas.map((area) => {
            return <Tag>{area}</Tag>;
          })}
        </TagContainer>
        <ButtonBig>Encontrar combinações</ButtonBig>
      </Card>
    </Container>
  );
}

export default AreasOfInterest;
