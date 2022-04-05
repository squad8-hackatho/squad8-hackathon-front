import styled from 'styled-components';
import { customMedia } from '../../themes/theme';

export const Section = styled.section`
  justify-content: center;
  display: flex;
  width: 55vw;
  height: 100vh;
  background-color: #c4c4c4;

  ${customMedia.lessThan('mobile')`
    height: 0px;
    width: 0px;
    display: none;
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
`;

export const Article = styled.article`
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 100px 50px;
`;
