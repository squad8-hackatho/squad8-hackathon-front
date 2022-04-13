import React from 'react';
import { Section, Title, Main } from './styles';

const Pattern: React.FC = ({ children }) => {
  return (
    <Main>
      <Section>
        <Title>
          Technical<strong>Share</strong>
        </Title>
      </Section>
      {children}
    </Main>
  );
};

export default Pattern;
