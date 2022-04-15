import styled from 'styled-components';
import { theme } from '../../themes/theme';

export const Section = styled.button`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  h1 {
    margin-right: 20px;
  }
`;

export const Load = styled.div`
  border: 12px solid ${theme.colors.white};
  border-top: 16px solid ${theme.colors.mainOrange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
