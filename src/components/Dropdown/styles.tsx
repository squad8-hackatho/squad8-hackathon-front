import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Container = styled.div`
  width: 100%;

  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin-bottom: 30px;

  ${customMedia.lessThan('mobileL')`
    flex-direction: column;
  `}
`;

export const Select = styled.select`
  font-family: 'Arial';
  font-size: 16px;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding: 12px 8px;
  margin: 0 10px;
  outline: 0;
  border: 2px groove ${theme.colors.white};
  border-radius: 8px;
  background: ${theme.colors.white};
  color: ${theme.colors.gray3};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
`;

export const Icon = styled.div`
  position: relative;
  left: -40px;
  top: 3px;

  ${customMedia.lessThan('mobileL')`
    position: relative;
    left: 150px;
    top: -30px;
  `}

  ${customMedia.lessThan('mobileM')`
    position: relative;
    left: 140px;
    top: -30px;
  `}

  ${customMedia.lessThan('mobileS')`
    position: relative;
    left: 115px;
    top: -30px;
  `}
`;
