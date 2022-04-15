import styled from 'styled-components';
// import Modal from 'styled-react-modal';
<<<<<<< HEAD
import { theme, customMedia } from '../../themes/theme';
=======
import { customMedia, theme } from '../../themes/theme';
>>>>>>> 4281fa129e9c300e39b8b52ee3438b901e1d3a33

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background};

  ${customMedia.between('tablet', 'laptopL')`
    height: 100vh;
    overflow-y: hidden;
  `}
`;

export const Form = styled.form`
  display: flex;
  width: 45vw;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  ${customMedia.between('tablet', 'laptopL')`
    height: 97vh;
    overflow: scroll;
  `}

  margin: 50px 0 50px 0;
`;

export const Section = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${customMedia.between('tablet', 'laptopL')`
    overflow: scroll;
    
    height: 100vh;
  `}

  button {
    width: 300px;
    margin-top: 30px;
  }
`;

export const H2 = styled.h2`
  font-weight: normal;
  margin-bottom: 20px;
  color: ${theme.colors.mainOrange};
`;

export const H3 = styled.h3`
  font-weight: 500;
  font-size: 16px;
  align-self: flex-start;
  margin: 10px 0 -5px 20px;
`;

export const Span = styled.span`
  color: ${theme.colors.error};
  font-size: 14px;
  font-weight: 600;
`;

export const P = styled.p`
  font-size: 14px;
  button {
    outline: none;
    width: 80px;
    background-color: ${theme.colors.background};
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 20px;
  }

  ${customMedia.lessThan('mobileS')`
    font-size: 13px;
  `}
`;

export const Select = styled.select`
  width: 300px;
  padding: 15px 15px;
  outline: none;
  border-radius: 8px;
  margin: 10px 10px;
  background-color: ${theme.colors.white};
`;

export const Input = styled.input`
  width: 300px;
  padding: 15px 15px;
  text-decoration: none;
  outline: none;
  background-color: ${theme.colors.white};
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
  background-color: ${theme.colors.white};
`;

export const Button = styled.button`
  color: ${theme.colors.mainOrange};
`;

export const Tags = styled.div`
  width: 300px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
`;

export const Tag = styled.div`
  background-color: ${theme.colors.white};

  border: 2px solid ${theme.colors.mainOrange};
  border-radius: 8px;
  padding: 8px;
  margin: 10px 5px 0;
  cursor: pointer;

  font-size: 14px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  font-weight: 500;
`;
