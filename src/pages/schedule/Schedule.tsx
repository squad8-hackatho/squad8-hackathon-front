import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ScheduleItem } from '../../components/ScheduleItem/ScheduleItem';
import TopBarPattern from '../../components/topBar/profile/TopBarProfile';
import {
  Main,
  RequestFromOthers,
  RequestsWrapper,
  UserRequest,
} from './styles';

export function Schedule() {
  const currentUser = useSelector((state: any) => {
    return state.user;
  });
  const { mentoringListGiven, mentoringListReceived } = currentUser.user;

  return (
    <Main>
      <TopBarPattern />
      <RequestsWrapper>
        <UserRequest>
          <h2>Meus agendamentos</h2>
          {mentoringListReceived.map((item: any) => {
            return (
              <ScheduleItem
                key={uuidv4()}
                name={item.requiredUserName}
                subject={item.subject}
                urgency={item.urgency}
              />
            );
          })}
        </UserRequest>
        <RequestFromOthers>
          <h2>Solicitações</h2>
          {mentoringListGiven.map((item: any) => {
            return (
              <ScheduleItem
                key={uuidv4()}
                name={item.userName}
                subject={item.subject}
                urgency={item.urgency}
              />
            );
          })}
        </RequestFromOthers>
      </RequestsWrapper>
    </Main>
  );
}

export default Schedule;
