import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section, Title, Span, SpanP, P } from './styles';

function Home() {
  const TextH1 = 'CONECTAR EXPERIÊNCIAS';
  const TextP = 'Texto Explicando a proposta da aplicação';

  return (
    <main>
      <Section>
        <Title>
          {TextH1.split(' ').map((word) => {
            return <Span key={uuidv4()}>{word}</Span>;
          })}
        </Title>

        <P>
          {TextP.split(' ').map((word) => {
            return <SpanP key={uuidv4()}>{word}</SpanP>;
          })}
        </P>
      </Section>
    </main>
  );
}

export default Home;
