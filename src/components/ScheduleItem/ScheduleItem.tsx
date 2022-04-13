import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import { Container, Name, NameSubject, Subject } from './styles';

type Props = {
  name: string;
  subject: string;
  urgency: boolean;
};

export function ScheduleItem({ name, subject, urgency }: Props) {
  return (
    <Container>
      <BsIcons.BsCalendarCheck size={40} />
      <NameSubject>
        <Name>{name}</Name>
        <Subject>{subject}</Subject>
      </NameSubject>
      {urgency ? (
        <RiIcons.RiAlarmWarningFill size={40} />
      ) : (
        <RiIcons.RiZzzFill size={40} />
      )}
    </Container>
  );
}
