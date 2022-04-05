import React from 'react';
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
  Button
} from './styles';
import foto from '../../assets/foto.png';

export function MentorCard() {
  return (
    <Card>
      <Header>
        <ProfilePicture src={foto} alt="Teste" />
        <Description>
          <Name>Bruno</Name>
          <Occupation>
            <OccupationItem>
              <strong>Area:</strong> Front End Developer
            </OccupationItem>
            <OccupationItem>
              <strong>Nível:</strong> Trainee
            </OccupationItem>
          </Occupation>
        </Description>
      </Header>
      <Bio>
        <BioDescr>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis
          sed ante a suscipit. Duis porttitor libero ut quam fermentum congue
          vitae vel dolor. Curabitur efficitur sit amet ligula luctus aliquam.
          Nullam malesuada libero facilisis quam integer.
        </BioDescr>
        <Expertises>
          <Tag>React</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>SQL</Tag>
          <Tag>Scrum</Tag>
          <Tag>Teste</Tag>
        </Expertises>
      </Bio>
      <Buttons>
        <Button>Teste</Button>
        <Button>Teste</Button>
      </Buttons>
    </Card>
  );
}
