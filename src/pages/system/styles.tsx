import styled from 'styled-components';
// import Modal from 'styled-react-modal';
import { theme } from '../../themes/theme';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
    margin-top: 40px;
  }
`;

export const H2 = styled.h2`
  font-weight: normal;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: ${theme.colors.red};
  font-size: 14px;
`;

export const P = styled.p`
  button {
    outline: none;
    width: 80px;
    background-color: ${theme.colors.white};
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 20px;
  }
`;

export const Select = styled.select`
  width: 300px;
  padding: 15px 15px;
  outline: none;
  border-radius: 8px;
  margin: 10px 10px;
  background-color: ${theme.colors.lightGray};
`;

export const Input = styled.input`
  width: 300px;
  padding: 15px 15px;
  text-decoration: none;
  outline: none;
  background-color: ${theme.colors.lightGray};
  border-radius: 8px;
  margin: 10px 0px;
`;

export const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  margin-top: 10px;
  padding: 15px 15px;
  border-radius: 8px;
  outline: none;
  resize: none;
  background-color: ${theme.colors.lightGray};
`;

export const Button = styled.button``;
