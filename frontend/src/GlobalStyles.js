/*globalStyles.js*/
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-family: 'Quicksand', sans-serif;
    background: rgba(31, 41, 55);
  }
`;



export default GlobalStyle;
