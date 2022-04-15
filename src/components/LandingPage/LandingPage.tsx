import React from 'react';
import {
  BackgroundWithImage,
  Button,
  Buttons,
  LinkStyled,
  Main,
  Skip,
  Text,
  Title,
  Tutorial,
} from './styles';

type Props = {
  imageSrc: any;
  imageAlt: string;
  title: string;
  text: string;
  setSelectedLanding: Function;
  selectedLanding: any;
};

export function LandingPage({
  imageSrc,
  imageAlt,
  title,
  text,
  setSelectedLanding,
  selectedLanding,
}: Props) {
  return (
    <Main>
      <BackgroundWithImage>
        <img src={imageSrc} alt={imageAlt} />
      </BackgroundWithImage>

      <Tutorial>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <Buttons>
          <Button
            selected={selectedLanding.first}
            onClick={() => {
              setSelectedLanding({ first: true, second: false, third: false });
            }}
          />
          <Button
            selected={selectedLanding.second}
            onClick={() => {
              setSelectedLanding({ first: false, second: true, third: false });
            }}
          />
          <Button
            selected={selectedLanding.third}
            onClick={() => {
              setSelectedLanding({ first: false, second: false, third: true });
            }}
          />
        </Buttons>
        <Skip>
          <LinkStyled to="/usersList">Acessar Plataforma</LinkStyled>
        </Skip>
      </Tutorial>
    </Main>
  );
}

export default LandingPage;
