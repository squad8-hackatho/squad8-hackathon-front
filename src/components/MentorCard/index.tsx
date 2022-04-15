import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { setRequest } from '../../redux/userSlice';
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
import foto from '../../assets/profile.jpg';

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
  const dispatch = useDispatch();
  const getTags = () => {
    return tags.map((item) => {
      return <Tag key={uuidv4()}>{item.skill}</Tag>;
    });
  };

  const getBioDescription = () => {
    const size = bioDescription.length;
    let subString = '';
    if (size > 150) {
      subString = bioDescription.substring(0, 150);
      return `${subString} ...`;
    }
    return bioDescription;
  };

  return (
    <Card>
      <Header>
        <PictureAndName>
          <ProfilePicture src={foto} alt="Teste" />
          <Description>
            <Name>{name}</Name>
            <OccupationItem>{occupation}</OccupationItem>
          </Description>
        </PictureAndName>
        <Bio>
          <BioDescr>{getBioDescription()}</BioDescr>
        </Bio>
        <hr />
      </Header>
      <Expertises>
        <p>Tecnologias</p>
        <Tags>{getTags()}</Tags>
      </Expertises>
      <hr />
      <Buttons>
        <Link
          onClick={async () => {
            await dispatch(setRequest(true));
          }}
          to={`/profile/${email}`}
        >
          <Button>Marcar Horário</Button>
        </Link>
        <Link to={`/profile/${email}`}>
          <Button>Ver perfil</Button>
        </Link>
      </Buttons>
    </Card>
  );
}
