import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  Card,
  Header,
  ProfilePicture,
  Description,
  Name,
  OccupationItem,
  Bio,
  BioDescr,
  Expertises,
  Tag,
  Buttons,
  Tags,
  Button,
  PictureAndName,
} from './styles';
import foto from '../../assets/foto.png';

type Props = {
  name: string;
  occupation: string;
  bioDescription: string;
  tags: any[];
  email: string;
};

export function MentorCard({
  name,
  occupation,
  bioDescription,
  tags,
  email,
}: Props) {
  const getTags = () => {
    return tags.map((item) => {
      return <Tag key={uuidv4()}>{item.skill}</Tag>;
    });
  };
  return (
    <Card>
      <Header>
        <PictureAndName>
          <ProfilePicture src={foto} alt="Teste" />
          <Description>
            <Name>{name}</Name>
            <OccupationItem>
              <strong>Cargo:</strong> {occupation}
            </OccupationItem>
          </Description>
        </PictureAndName>
        <Bio>
          <BioDescr>{bioDescription}</BioDescr>
        </Bio>
        <hr />
      </Header>
      <Expertises>
        <p>Tecnologias</p>
        <Tags>{getTags()}</Tags>
      </Expertises>
      <hr />
      <Buttons>
        <Button>Marcar Horário</Button>
        <Link to={`/profile/${email}`}>
          <Button>Ver perfil</Button>
        </Link>
      </Buttons>
    </Card>
  );
}
