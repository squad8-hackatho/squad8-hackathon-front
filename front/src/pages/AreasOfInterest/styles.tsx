import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
import { theme } from '../../themes/theme';

const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
});

export const Container = styled.section`
  display: flex;
  min-width: auto;
  justify-content: center;
  padding: 50px;
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;

  max-width: 804px;
  
  ${customMedia.lessThan('tablet')`
    flex-direction: column;
  `};

  h3 {
    margin-bottom: 50px;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
