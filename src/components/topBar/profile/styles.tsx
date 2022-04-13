import styled from 'styled-components';
import { customMedia, theme } from '../../../themes/theme';

export const Container = styled.section`
  height: 100px;

  display: flex;
  align-items: center;
  border-bottom: 2px solid rgba(196, 196, 196, 0.6);

  ${customMedia.lessThan('mobileL')`
    height: 0px;
    border: none;
  `};

  h3 {
    color: ${theme.colors.orange};
    font-weight: 400;
    font-size: 24px;

    ${customMedia.lessThan('mobileL')`
    font-size: 0px;
  `};
  }
`;

export const TopBar = styled.article`
  margin-left: 8%;
`;
