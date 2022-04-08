import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 89vw;
  height: 89vh;
  background-color: white;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
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
  color: red;
  font-size: 14px;
`;

export const P = styled.p`
  button {
    outline: none;
    width: 80px;
    background-color: white;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 20px;
  }
`;

export const Article = styled.article`
  button {
    padding: 10px;
    position: absolute;
    right: 0;
    margin-right: 5.5vw;
  }
`;

export const Input = styled.input`
  width: 300px;
  padding: 15px 15px;
  text-decoration: none;
  outline: none;
  background-color: #ebebeb;
  border-radius: 8px;
  margin: 10px 0px;
`;

export const Button = styled.button``;
