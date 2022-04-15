import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 100vh;
  background-color: ${theme.colors.white};
`;

export const Title = styled.p`
  font-size: 80px;
  color: ${theme.colors.mainOrange};

  ${customMedia.lessThan('laptop')`
    font-size: 50px;
  `}

  ${customMedia.lessThan('laptopS')`
    font-size: 24px;
    margin-top: 5%;
    margin-left: 65%;
  `};
`;
