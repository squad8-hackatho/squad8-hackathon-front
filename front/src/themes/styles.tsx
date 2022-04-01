/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
   * {
     margin: 0;
     padding: 0;
     border: 0;
     box-sizing: border-box;
   }

   body {
     background-color: ${({ theme }) => theme.colors.primary};
   }
`

export default GlobalStyle;