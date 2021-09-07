import { createGlobalStyle } from "styled-components";
import syncopate from "./Syncopate-Bold.ttf";
import input from "./InputMono-Regular.ttf";
const fontFaces = createGlobalStyle`
  @font-face {
    font-family: "Syncopate-Bold";
    src: url(${syncopate}) format("woff2");
 
    font-style: normal;
    
  }
  @font-face {
    font-family: "InputMono";
    src: url(${input}) format("woff2");
 
    font-style: normal;
  }
`;

export default fontFaces;
