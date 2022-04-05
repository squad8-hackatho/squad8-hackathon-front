import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;

  ${customMedia.lessThan('mobile')`
    display: block;
  `};
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 804px;

  h3 {
    margin-bottom: 50px;
  }

  ${customMedia.lessThan('tablet')`
    flex-direction: column;
  `};
`;

export const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
