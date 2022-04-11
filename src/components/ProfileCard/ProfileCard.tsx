import React, { useState, useEffect } from 'react';
import { Section, Article, ProfilePicture, P, H1, Contact } from './styles';
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
};

function ProfileCard({
  widthScreen,
  email,
  userName,
  linksListDTO,
  professionList,
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
    <Section>
      <ProfilePicture src={foto} />
      <Article>
        <H1>{userName}</H1>
        <P>
          <strong>Cargo:</strong> {area}
        </P>
      </Article>
      {widthScreen > screenSizes.default ? (
        <>
          <ButtonBig>Quero me conectar</ButtonBig>

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
