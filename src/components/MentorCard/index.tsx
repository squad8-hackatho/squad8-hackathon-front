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
} from './styles';
import foto from '../../assets/foto.png';

type Props = {
  name: string;
  level: string;
  bioDescription: string;
  tags: any[];
  email: string;
};

export function MentorCard({
  name,
  level,
  bioDescription,
  tags,
  email,
}: Props) {
  const getSubString = () => {
    const length = 100;
    let subString = bioDescription.substring(0, length);
    if (bioDescription.length > 100) subString = `${subString} ...`;

    return subString;
  };

  const getTags = () => {
    return tags.map((item) => {
      return <Tag key={uuidv4()}>{item.skill}</Tag>;
    });
  };
  return (
    <Card>
      <Header>
        <ProfilePicture src={foto} alt="Teste" />
        <Description>
          <Name>{name}</Name>
          <OccupationItem>
            <strong>Nível:</strong> {level}
          </OccupationItem>
        </Description>
      </Header>
      <Bio>
        <BioDescr>{getSubString()}</BioDescr>
      </Bio>
      <Expertises>
        <p>Habilidades</p>
        <Tags>{getTags()}</Tags>
      </Expertises>
      <Buttons>
        <Button>Marcar Horário</Button>
        <Link to={`/profile/${email}`}>
          <Button>Ver perfil</Button>
        </Link>
      </Buttons>
    </Card>
  );
}
