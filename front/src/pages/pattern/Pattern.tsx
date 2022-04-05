import React from 'react';
import { Article, Section, Title, Main } from './styles';

const Pattern: React.FC = ({ children }) => {
  return (
    <Main>
      <Section>
        <Article>
          <Title>
            Technical<strong>Share</strong>
          </Title>
        </Article>
      </Section>
      {children}
    </Main>
  );
};

export default Pattern;
