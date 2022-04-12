import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { theme } from '../../themes/theme';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(196, 196, 196, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  width: 70%;
  height: 50%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.white};
  color: ${theme.colors.orange};
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const HeaderModalFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleModalFilter = styled.div`
  
`;

export const CloseModalFilter = styled(MdClose)`

`;
