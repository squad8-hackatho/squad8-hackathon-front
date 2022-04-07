/* eslint-disable no-sequences */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tag from '../../components/Tag';
import { Card, Container, TagContainer, H2 } from './styles';
import { ButtonBig } from '../../components/Button/styles';
import { BannerPattern } from '../index';

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
    <BannerPattern>
      <Container>
        <Card>
          <H2>
            Em qual ou quais <strong>áreas da tecnologia</strong> você possui
            interesse em aprender?
          </H2>
          <TagContainer>
            {areas.map((area) => {
              return <Tag key={uuidv4()}>{area}</Tag>;
            })}
          </TagContainer>
          <ButtonBig>Encontrar combinações</ButtonBig>
        </Card>
      </Container>
    </BannerPattern>
  );
}

export default AreasOfInterest;
