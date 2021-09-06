import { createGlobalStyle } from "styled-components";
import myFontURL from "./Syncopate-Bold.ttf";
const fontFaces = createGlobalStyle`
  @font-face {
    font-family: "Syncopate-Bold";
    src: url(${myFontURL}) format("woff2");
 
    font-style: normal;
  }
`;

export default fontFaces;
