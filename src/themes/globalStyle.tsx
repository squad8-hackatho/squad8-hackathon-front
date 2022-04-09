import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
   * {
     margin: 0;
     padding: 0;
     border: 0;
     box-sizing: border-box;
   }

   body {
      font-size: 18px;
      background-color: ${({ theme }) => {
        return theme.colors.white;
      }};
   }
`;

export default GlobalStyle;
