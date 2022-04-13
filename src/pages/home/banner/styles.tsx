import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Section = styled.section`
  justify-content: center;
  display: flex;
  width: 55vw;
  height: 100vh;
  background-color: ${theme.colors.mediumGray};

  ${customMedia.lessThan('laptopS')`
    height: 0px;
    width: 0vw;
  `}
`;

export const Main = styled.main`
  display: flex;
`;

export const Title = styled.p`
  font-size: 60px;
  margin-top: 50%;

  ${customMedia.lessThan('tablet')`
    font-size: 50px;
  `}

  ${customMedia.lessThan('laptopS')`
    font-size: 24px;
    margin-top: 5%;
    margin-left: 65%;
  `}
`;

export const Article = styled.article`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 50px;

  ${customMedia.lessThan('laptopS')`
    padding: 30px 0px;
  `}
`;
