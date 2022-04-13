import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55vw;
  height: 100vh;
  background-color: ${theme.colors.white};

  ${customMedia.lessThan('tablet')`
    width: 0;
    height: 0vh;
  `}
`;

export const Main = styled.main`
  display: flex;
`;

export const Title = styled.p`
  font-size: 80px;
  color: ${theme.colors.orange};

  ${customMedia.lessThan('tablet')`
    font-size: 50px;
  `}

  ${customMedia.lessThan('laptopS')`
    font-size: 24px;
    margin-top: 5%;
    margin-left: 65%;
  `};
`;
