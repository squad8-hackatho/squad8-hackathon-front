import styled from 'styled-components';
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
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 30px;
  width: 400px;
  height: 250px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background};
  color: ${theme.colors.mainOrange};
  position: relative;
  z-index: 10;
  border-radius: 16px;

  ${customMedia.lessThan('mobileM')`
    width: 350px;
    height: 300px;
  `}

  ${customMedia.lessThan('mobileS')`
    width: 300px;
  `}
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  ${customMedia.lessThan('mobileL')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const Button = styled.button`
  width: 40%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.mainOrange};
  border-radius: 16px;
  border: 1px solid ${theme.colors.mainOrange};
  cursor: pointer;
  font-size: 17px;
  color: #ffffff;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;

  ${customMedia.lessThan('mobileL')`
    width: 70%;
    height: 30%;
  `}
`;
