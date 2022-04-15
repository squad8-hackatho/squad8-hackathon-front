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

  ${customMedia.lessThan('mobileS')`
    svg {
      margin-left: 0;
    }
  `}
`;

export const EmptySchedule = styled.div`
  width: 50%;
  height: 200px;
  border: 5px solid ${theme.colors.mainOrange};
  border-radius: 16px;
  padding: 30px;
  margin: 50px 0;
  background-color: ${theme.colors.gray1};
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${theme.colors.mainOrange};
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    margin: 0;
  }

  ${customMedia.lessThan('laptop')`
    width: 80%;
  `}

  ${customMedia.lessThan('mobileS')`
    h2{
      font-size: 26px;
    }
  `}
`;
