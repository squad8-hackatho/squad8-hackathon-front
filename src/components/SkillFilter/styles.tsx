import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { customMedia, theme } from '../../themes/theme';

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(196, 196, 196, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 1190px;
  height: 700px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background};
  color: ${theme.colors.mainOrange};
  position: relative;
  z-index: 10;
  border-radius: 10px;

  padding: 23px 30px 23px 30px;

  ${customMedia.lessThan('laptopL')`
    width: 70vw;
    height: 70vh;
  `}

  ${customMedia.lessThan('tablet')`
    width: 80vw;
    height: 75vh;
  `}

  ${customMedia.lessThan('mobileL')`
    width: 100vw;
    min-height: 100vh;
  `}
`;

export const ModalContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h3 {
    font-size: 30px;
    font-weight: bold;
    margin: 15px 0 15px 0;
  }
`;

export const HeaderModalFilter = styled.div`
  width: 100%;

  margin: 0 0 40px 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WrapperForm = styled.div`
  width: 100%;

  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h3 {
    margin-left: 20px;
  }

  ${customMedia.lessThan('laptop')`
    height: 80%;
  `}

  ${customMedia.lessThan('mobileL')`
    h3 {
      margin-left: 0;
    }
  `}
`;

export const TitleModalFilter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    font-size: 35px;
    font-weight: bold;
    margin-left: 16px;
  }

  ${customMedia.lessThan('mobileS')`
    h2 {
      font-size: 30px;
      font-weight: bold;
      margin-left: 16px;
    }
  `}
`;

export const CloseModalFilter = styled(MdClose)`
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  ${customMedia.lessThan('mobileL')`
    align-items: center;
  `}
`;

export const ButtonModalFilter = styled.button`
  width: 25%;
  height: 60px;
  border: 1px solid ${theme.colors.mainOrange};
  border-radius: 12px;
  cursor: pointer;

  background-color: ${theme.colors.mainOrange};
  color: ${theme.colors.white};

  :disabled {
    background-color: ${theme.colors.darkOrange};
    cursor: not-allowed;
  }

  font-size: 35px;
  line-height: 52px;
  font-weight: 400;

  ${customMedia.lessThan('laptop')`
    width: 40%;
  `}

  ${customMedia.lessThan('tablet')`
    width: 70%;
  `}
  
  ${customMedia.lessThan('mobileL')`
    margin: 0;
  `}
`;
