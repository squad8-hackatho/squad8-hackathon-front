import styled from 'styled-components';
import { customMedia, theme } from '../../themes/theme';

export const Main = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: ${theme.colors.background};
`;

export const RequestsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 50px;

  ${customMedia.lessThan('mobileL')`
    flex-direction: column;
    justify-content: center;
  `}
`;

export const UserRequest = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  ${customMedia.lessThan('mobileL')`
    width: 100%;
    justify-content: center;
  `}
`;

export const RequestFromOthers = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  ${customMedia.lessThan('mobileL')`
    width: 100%;
    margin-top: 40px;
  `}
`;

export const Article = styled.article`
  display: flex;
  align-items: center;

  svg {
    margin-left: 20px;
    cursor: pointer;
  }
`;
