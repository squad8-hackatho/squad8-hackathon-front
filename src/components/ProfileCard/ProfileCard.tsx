import React, { useState, useEffect } from 'react';
import {
  Section,
  Article,
  ProfilePicture,
  P,
  H1,
  Contact,
  Midia,
} from './styles';
import { ButtonBig } from '../Button/styles';
import { screenSizes } from '../../themes/theme';
import foto from '../../assets/foto.png';

type props = {
  widthScreen: number;
  email: string;
  userName: string;
  linksListDTO: [
    {
      domain: string;
      link: string;
    }
  ];
  professionList: [
    {
      skill: string;
      area: string;
    }
  ];
  setConnectCard: Function;
  connect: boolean;
};

function ProfileCard({
  widthScreen,
  email,
  userName,
  linksListDTO,
  professionList,
  setConnectCard,
  connect,
}: props) {
  const area = 'Dev';
  const [linkedin, setLinkedin] = useState('br.linkedin.com');
  const [whatsapp, setWhatsapp] = useState('(XX) XXXXX - XXXX');

  const getContact = () => {
    linksListDTO.forEach((item) => {
      if (item.domain === 'linkedin') {
        setLinkedin(item.link);
      }
      if (item.domain === 'whatsapp') {
        setWhatsapp(item.link);
      }
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  console.log(linksListDTO, professionList);
  return (
    <Section flag={connect}>
      <ProfilePicture src={foto} />
      <Article>
        <H1>{userName}</H1>
        <P>
          <strong>Cargo:</strong> {area}
        </P>

        {widthScreen < screenSizes.default ? (
          <Midia>
            <P>{linkedin}</P>
          </Midia>
        ) : null}
      </Article>
      {widthScreen > screenSizes.default ? (
        <>
          <ButtonBig
            onClick={() => {
              setConnectCard();
            }}
          >
            Quero me conectar
          </ButtonBig>

          <Contact>
            <P>
              <strong>{whatsapp}</strong>
            </P>
            <P>
              <strong>{email}</strong>
            </P>
            <P>
              <strong>{linkedin}</strong>
            </P>
          </Contact>
        </>
      ) : null}
    </Section>
  );
}

export default ProfileCard;
