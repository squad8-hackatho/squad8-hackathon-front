import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Container = styled.div`
  width: 100vw;
  
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;  
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 60%;

  ${customMedia.lessThan('mobileL')`
    flex-direction: column;
    width: 270px;
  `}
`;

export const Select = styled.select`
  font-family: 'Arial';
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 12px 8px;
  margin: 0 10px;
  outline: 0;
  border: 1px groove #000000;
  border-radius: 8px;
  background: ${theme.colors.blackGray};
  color: ${theme.colors.lightGray};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Icon = styled.div`
  position: relative;
  left: -40px;
  top: 3px;

  ${customMedia.lessThan('mobileL')`
    position: relative;
    left: 120px;
    top: -30px;
  `}
`;
