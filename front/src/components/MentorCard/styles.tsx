import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 200px;
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;

  flex-direction: row;
  display: flex;

  width: 50%;
  padding: 32px;
`;
