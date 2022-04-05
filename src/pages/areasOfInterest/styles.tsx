import styled from 'styled-components';
import { theme, customMedia } from '../../themes/theme';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 50px;
  width: 50vw;

  ${customMedia.lessThan('tablet')`
  `};

  ${customMedia.lessThan('mobileL')`
    width: 100vw;
    padding: 0px;
    padding-top: 80px;
  `};
`;

export const H2 = styled.h2`
  font-weight: normal;
  ${customMedia.lessThan('mobileL')`
    font-size: 24px;
  `}
`;

export const Card = styled.article`
  background-color: ${theme.colors.primary};
  box-shadow: 5px 5px 12px 3px #eee;
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 804px;
  align-items: center;

  h2 {
    margin-bottom: 50px;
  }

  ${customMedia.lessThan('tablet')`
    flex-direction: column;
  `};

  ${customMedia.lessThan('mobileL')`
    padding: 32px 20px;
  `};
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${customMedia.lessThan('mobileL')`
    justify-content: space-between;
  `};
`;
