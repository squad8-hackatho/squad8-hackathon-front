import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const ProfilePictureStyle = styled.img`
  width: 300px;
  border-radius: 200px;

  margin-top: 20px;
  margin-left: 40px;
  margin-right: 60px;
  margin-bottom: 20px;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;

  margin-top: 200px;
`;

export const Card = styled.div`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;

  flex-direction: row;
  display: flex;

  width: 80%;
  padding: 32px;
`;
