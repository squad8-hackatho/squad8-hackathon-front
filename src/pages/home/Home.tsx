import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../themes/theme';
import BannerPattern from './banner/Banner';
import { HomeImage } from '../../assets/images';

import {
  Article,
  Section,
  P,
  ImageArticle,
  Button,
  Main,
  ArticleButton,
  Title,
} from './styles';

function Home() {
  const [widthScreen, setWidthScreen] = useState(window.screen.width / 16);

  useEffect(() => {
    function handleResize() {
      setWidthScreen(window.screen.width / 16);
    }

    window.addEventListener('resize', handleResize);
  });

  return (
    <Main>
      <BannerPattern widthScreen={widthScreen} />
      <Section>
        <Article>
          {widthScreen > theme.screenSizes.tablet &&
          widthScreen < theme.screenSizes.laptopS ? (
            <Title>
              Technical<strong>Share</strong>
            </Title>
          ) : null}
          <P>
            Encontrar as <strong>pessoas ideais</strong> para compartilhar
            conhecimento e trocar experiências nunca foi tão fácil
          </P>
        </Article>

        <ImageArticle>
          <HomeImage />
          <ArticleButton>
            <Link to="/login">
              <Button>Acessar minha conta</Button>
            </Link>
            <Link to="/register">
              <Button>Criar minha conta</Button>
            </Link>
          </ArticleButton>
        </ImageArticle>
      </Section>
    </Main>
  );
}

export default Home;
