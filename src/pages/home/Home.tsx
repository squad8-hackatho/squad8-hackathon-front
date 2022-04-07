import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { ButtonBig } from '../../components/Button/styles';
import { BannerPattern } from '../index';
import {
  CardName,
  Input,
  Article,
  Span,
  SpanP,
  Title,
  Section,
  H2,
} from './styles';

function Home() {
  const TextH1 = 'CONECTAR EXPERIÊNCIAS';
  const TextP = 'Texto Explicando a proposta da aplicação';

  return (
    <BannerPattern>
      <Section>
        <Article>
          <Title>
            {TextH1.split(' ').map((word) => {
              return <Span key={uuidv4()}>{word}</Span>;
            })}
          </Title>

          <p>
            {TextP.split(' ').map((word) => {
              return <SpanP key={uuidv4()}>{word}</SpanP>;
            })}
          </p>
        </Article>

        <CardName>
          <H2>
            Como podemos <strong>te chamar?</strong>
          </H2>
          <Input placeholder="Escreva o seu nome" autoFocus maxLength={50} />
          <Link to="/interest">
            <ButtonBig>Começar</ButtonBig>
          </Link>
        </CardName>
      </Section>
    </BannerPattern>
  );
}

export default Home;
