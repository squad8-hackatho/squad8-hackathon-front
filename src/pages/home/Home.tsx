import React from 'react';
import { Link } from 'react-router-dom';
import BannerPattern from './banner/Banner';
import { HomeImage } from '../../assets/images';

import { CardName, Article, Section, P, ImageArticle, Button } from './styles';

function Home() {
  return (
    <BannerPattern>
      <Section>
        <Article>
          <P>
            Encontrar as <strong>pessoas ideais</strong> para compartilhar
            conhecimento e trocar experiências nunca foi tão fácil
          </P>
        </Article>

        <ImageArticle>
          <HomeImage />
          <CardName>
            <Link to="/login">
              <Button>Acessar minha conta</Button>
            </Link>
            <Link to="/register">
              <Button>Criar minha conta</Button>
            </Link>
          </CardName>
        </ImageArticle>
      </Section>
    </BannerPattern>
  );
}

export default Home;
