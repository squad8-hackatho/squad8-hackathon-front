import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { screenSizes } from '../../themes/theme';
import { ButtonBig } from '../../components/Button/styles';
import { Description, H2, Tags, Tag, P, FooterButton } from './styles';

type props = {
  dataArr: any;
  widthScreen: number;
};

function Profile({ dataArr, widthScreen }: props) {
  const getTags = (value: string) => {
    return dataArr.expertiseList.map((item: any) => {
      if (value === 'area') return <Tag key={uuidv4()}>{item.area}</Tag>;

      return <Tag key={uuidv4()}>{item.skill}</Tag>;
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
        <Tags>{getTags('area')}</Tags>
      </Description>
      <Description>
        <H2>Tecnologias</H2>
        <Tags>{getTags('skill')}</Tags>
      </Description>

      {widthScreen < screenSizes.default ? (
        <FooterButton>
          <ButtonBig>Marcar Horário</ButtonBig>
        </FooterButton>
      ) : null}
    </>
  );
}

export default Profile;
