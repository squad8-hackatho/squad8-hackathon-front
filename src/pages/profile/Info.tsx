import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { screenSizes } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';
import { Description, H2, Tags, Tag, P, FooterButton } from './styles';

type props = {
  dataArr: any;
  widthScreen: number;
  setConnectCard: Function;
  areas: any;
};

function Profile({ dataArr, widthScreen, setConnectCard, areas }: props) {
  const getTags = () => {
    return dataArr.expertiseList.map((item: any) => {
      return <Tag key={uuidv4()}>{item.skill}</Tag>;
    });
  };

  const getAreas = () => {
    return areas.map((item: any) => {
      return <Tag key={uuidv4()}>{item}</Tag>;
    });
  };

  return (
    <>
      <Description>
        <H2>Descrição</H2>
        <P>{dataArr.bio}</P>
      </Description>
      <Description>
        <H2>Área</H2>
        <Tags>{getAreas()}</Tags>
      </Description>
      <Description>
        <H2>Tecnologias</H2>
        <Tags>{getTags()}</Tags>
      </Description>

      {widthScreen < screenSizes.tablet ? (
        <FooterButton>
          <ButtonBig
            onClick={() => {
              setConnectCard();
            }}
          >
            Marcar Horário
          </ButtonBig>
        </FooterButton>
      ) : null}
    </>
  );
}

export default Profile;
