import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.div`
  width: 600px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 5px 5px;
  margin: 5px 0 20px 0;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.3rem;

  background-color: ${theme.colors.lightGray};
  color: ${theme.colors.blackGray};
  outline: none;

  :focus-visible {
    outline: 1px dotted rgba(255, 255, 255, 0.4);
  }
`;
