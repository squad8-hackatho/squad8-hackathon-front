/* eslint-disable no-sequences */
import React from 'react';
import Tag from '../../components/Tag';
import { Card, Container, TagContainer } from './styles';

function AreasOfInterest() {
  const width = 165;

  return (
    <Container>
      <Card>
        <h3>
          Em qual ou quais áreas de tecnologia você possui interesse em
          aprender?
        </h3>
        <TagContainer>
          <Tag width={width}>Teste</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
          <Tag width={width}>Boa sorte</Tag>
        </TagContainer>
      </Card>
    </Container>
  );
}

export default AreasOfInterest;
