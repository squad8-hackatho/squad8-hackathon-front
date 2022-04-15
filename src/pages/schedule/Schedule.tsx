import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as BsIcons from 'react-icons/bs';
import { fetchUser } from '../../redux/userSlice';
import { deleteRequisition } from '../../services/services';
import { ScheduleItem } from '../../components/ScheduleItem/ScheduleItem';
import TopBarPattern from '../../components/topBar/profile/TopBarProfile';
import {
  Main,
  RequestFromOthers,
  RequestsWrapper,
  UserRequest,
  Article,
  EmptySchedule,
} from './styles';
import { ConfirmDelete } from '../../components/ConfirmDelete';

export function Schedule() {
  const currentUser = useSelector((state: any) => {
    return state;
  });
  const { mentoringListGiven, mentoringListReceived } = currentUser.user;
  const dispatch = useDispatch();

  const reload = async () => {
    const obj = {
      profileEmail: currentUser.user.email,
      authentication: currentUser.authorization,
    };
    await dispatch(fetchUser(obj));
  };

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({ uuid: '', email: '' });

  // console.log(currentUser);
  return (
    <Main>
      <ConfirmDelete
        showConfirmDelete={showConfirmDelete}
        setShowConfirmDelete={setShowConfirmDelete}
        deleteData={deleteData}
      />
      <TopBarPattern />
      <RequestsWrapper>
        <UserRequest>
          <h2>Meus agendamentos</h2>
          {mentoringListReceived[0] !== undefined ? (
            mentoringListReceived.map((item: any) => {
              return (
                <Article key={uuidv4()}>
                  <ScheduleItem
                    name={item.userName}
                    subject={item.subject}
                    urgency={item.urgency}
                  />
                  <BsIcons.BsTrash
                    size={40}
                    color="red"
                    onClick={async () => {
                      setDeleteData({
                        uuid: item.uuidRequisition,
                        email: item.userEmail,
                      });
                      setShowConfirmDelete(true);
                    }}
                  />
                </Article>
              );
            })
          ) : (
            <EmptySchedule>
              <h2>Nenhum agendamento</h2>
            </EmptySchedule>
          )}
        </UserRequest>
        <RequestFromOthers>
          <h2>Solicitações</h2>
          {mentoringListGiven[0] !== undefined ? (
            mentoringListGiven.map((item: any) => {
              return (
                <Article key={uuidv4()}>
                  <ScheduleItem
                    name={item.userName}
                    subject={item.subject}
                    urgency={item.urgency}
                  />
                  <BsIcons.BsTrash
                    size={40}
                    color="red"
                    onClick={async () => {
                      const flag = await deleteRequisition(
                        item.uuidRequisition,
                        item.requiredUserEmail,
                        currentUser.authorization
                      );
                      if (flag) reload();
                    }}
                  />
                </Article>
              );
            })
          ) : (
            <EmptySchedule>
              <h2>Nenhuma solicitação</h2>
            </EmptySchedule>
          )}
          {}
        </RequestFromOthers>
      </RequestsWrapper>
    </Main>
  );
}

export default Schedule;
