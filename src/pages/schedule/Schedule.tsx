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
} from './styles';
import { ConfirmDelete } from '../../components/ConfirmDelete';

export function Schedule() {
  const currentUser = useSelector((state: any) => {
    return state.user;
  });
  const { mentoringListGiven, mentoringListReceived } = currentUser;
  const dispatch = useDispatch();

  const reload = async () => {
    await dispatch(fetchUser(currentUser.user.email));
  };

  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [deleteData, setDeleteData] = useState({ uuid: '', email: '' });

  return (
    <Main>
      <ConfirmDelete showConfirmDelete={showConfirmDelete} setShowConfirmDelete={setShowConfirmDelete} deleteData={deleteData} />
      <TopBarPattern />
      <RequestsWrapper>
        <UserRequest>
          <h2>Meus agendamentos</h2>
          {mentoringListReceived.map((item: any) => {
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
                    setDeleteData({ uuid: item.uuidRequisition, email: item.userEmail })
                    setShowConfirmDelete(true);
                  }}
                />
              </Article>
            );
          })}
        </UserRequest>
        <RequestFromOthers>
          <h2>Solicitações</h2>
          {mentoringListGiven.map((item: any) => {
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
                      item.requiredUserEmail
                    );
                    if (flag) reload();
                  }}
                />
              </Article>
            );
          })}
        </RequestFromOthers>
      </RequestsWrapper>
    </Main>
  );
}

export default Schedule;
