import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Header,
  ProfilePicture,
  Description,
  Name,
  Occupation,
  OccupationItem,
  Bio,
  BioDescr,
  Expertises,
  Tag,
  Buttons,
  Tags,
  Button,
} from './styles';
import foto from '../../assets/foto.png';

type Props = {
  name: string;
  occupation: string;
  level: string;
  bioDescription: string;
  tags: any;
};

export function MentorCard({
  name,
  occupation,
  level,
  bioDescription,
  tags,
}: Props) {
  const getSubString = () => {
    const length = 100;
    return `${bioDescription.substring(0, length)} ...`;
  };
  return (
    <Card>
      <Header>
        <ProfilePicture src={foto} alt="Teste" />
        <Description>
          <Name>{name}</Name>
          <Occupation>
            <OccupationItem>
              <strong>Area:</strong> {occupation}
            </OccupationItem>
            <OccupationItem>
              <strong>Nível:</strong> {level}
            </OccupationItem>
          </Occupation>
        </Description>
      </Header>
      <Bio>
        <BioDescr>{getSubString()}</BioDescr>
      </Bio>
      <Expertises>
        <p>Habilidades</p>
        <Tags>
          <Tag>{tags[0]}</Tag>
          <Tag>{tags[1]}</Tag>
          <Tag>{tags[2]}</Tag>
          <Tag>{tags[3]}</Tag>
          <Tag>{tags[4]}</Tag>
          <Tag>Mais {tags.length - 5}</Tag>
        </Tags>
      </Expertises>
      <Buttons>
        <Button>Marcar Horário</Button>
        <Link to="/profile">
          <Button>Ver perfil</Button>
        </Link>
      </Buttons>
    </Card>
  );
}
