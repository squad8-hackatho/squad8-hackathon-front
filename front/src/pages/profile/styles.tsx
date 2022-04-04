import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

const customMedia = generateMedia({
  desktop: '78em',
  laptop: '64em',
  tablet: '60em',
  mobile: '46em',
});

export const Nav = styled.nav`
  margin-top: 50px;

  ${customMedia.lessThan('laptop')`
    display: flex;
    flex-direction: column;
  `};
`;

export const A = styled.a`
  font-weight: bolder;
  padding: 16px 31px;
  justify-content: center;
  color: #0099ff;  
`;
