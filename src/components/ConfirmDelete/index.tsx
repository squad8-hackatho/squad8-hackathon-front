import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/userSlice';
import { deleteRequisition } from '../../services/services';
import { Background, Button, Buttons, ModalWrapper } from './styles';

type Props = {
  showConfirmDelete: any;
  setShowConfirmDelete: Function;
  deleteData: any;
};

export function ConfirmDelete({
  showConfirmDelete,
  setShowConfirmDelete,
  deleteData,
}: Props) {
  const currentUser = useSelector((state: any) => {
    return state.user;
  });
  const dispatch = useDispatch();
  const reload = async () => {
    await dispatch(fetchUser(currentUser.email));
  };

  return (
    <div>
      {showConfirmDelete ? (
        <Background>
          <ModalWrapper>
            <h2>Você deseja realmente apagar esse agendamento?</h2>
            <Buttons>
              <Button
                onClick={async () => {
                  const flag = await deleteRequisition(
                    deleteData.uuid,
                    deleteData.email
                  );
                  setShowConfirmDelete(false);
                  if (flag) reload();
                }}
              >
                Sim
              </Button>
              <Button
                onClick={() => {
                  setShowConfirmDelete(false);
                }}
              >
                Não
              </Button>
            </Buttons>
          </ModalWrapper>
        </Background>
      ) : null}
    </div>
  );
}
