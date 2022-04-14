import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { LinkedinIcon, WhatsappIcon, EmailIcon } from '../../assets/icons';
import {
  Section,
  Article,
  ProfilePicture,
  P,
  H1,
  Contact,
  MidiaLinkedin,
  MidiaWhatsapp,
  MidiaEmail,
  Desktop,
} from './styles';
import { ButtonBig } from '../Button/styles';
import { screenSizes } from '../../themes/theme';
import foto from '../../assets/foto.png';

type props = {
  widthScreen: number;
  email: string;
  userName: string;
  connect: boolean;
  linksListDTO: [
    {
      domain: string;
      link: string;
    }
  ];
  occupation: string;
  setConnectCard: Function;
};

function ProfileCard({
  widthScreen,
  email,
  userName,
  linksListDTO,
  occupation,
  setConnectCard,
  connect,
}: props) {
  const [linkedin, setLinkedin] = useState('br.linkedin.com');
  const [whatsapp, setWhatsapp] = useState('(XX) XXXXX - XXXX');
  const currentUser = useSelector((state: any) => {
    return state.user;
  });

  const getContact = () => {
    linksListDTO.forEach((item) => {
      if (item.domain === 'linkedin') {
        setLinkedin(item.link);
      }
      if (item.domain === 'telefone') {
        setWhatsapp(item.link);
      }
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <Section>
      <ProfilePicture src={foto} />
      <Article>
        <H1>{userName}</H1>
        <P>Cargo: {occupation}</P>

        <MidiaLinkedin>
          <LinkedinIcon />

          <P>{linkedin}</P>
        </MidiaLinkedin>
      </Article>
      {widthScreen > screenSizes.ipadMini ? (
        <Desktop>
          {currentUser.email !== email ? (
            <ButtonBig
              onClick={() => {
                setConnectCard();
              }}
            >
              {connect ? 'Ver Perfil' : 'Marcar Horário'}
            </ButtonBig>
          ) : null}
          <Contact>
            <h3>Contatos:</h3>
            <MidiaWhatsapp>
              <WhatsappIcon />

              <P>
                <strong>{whatsapp}</strong>
              </P>
            </MidiaWhatsapp>
            <MidiaEmail>
              <EmailIcon />

              <P>
                <strong>{email}</strong>
              </P>
            </MidiaEmail>
          </Contact>
        </Desktop>
      ) : null}
    </Section>
  );
}

export default ProfileCard;
