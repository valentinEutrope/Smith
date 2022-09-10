import { createGlobalStyle } from "styled-components";
import { th } from "../themeHelpers";

const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 10px;
  }

  body {
    min-height: calc(100% - ${th("spaces.lg")});
  }

  /* Remove default padding */
  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    padding: 0;
    list-style: none;
  }

  /* Remove default margin */
  body,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core body defaults */
  body {
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
    outline: none;
  }

  /* Transform cursor in pointer for buttons */
  button {
    cursor: pointer;
  }

  /* ==== Typography ==== */
  body {
    font-family: ${th("typography.body")}; 
    line-height: ${th("variables.lineHeight")};
    font-size: ${th("fontSize.regular")};
  }

  h1,
  h2,
  h3 {
    font-family: ${th("typography.title")};    
    font-weight: bold;
  }

  h1 {
    font-size: ${th("fontSize.extraLarge")};
  }
  h2 {
    font-size: ${th("fontSize.veryLarge")};
  }
  h3 {
    font-size: ${th("fontSize.large")};
  }
  h4 {
    font-size: ${th("fontSize.medium")};
  }

  a {
    text-decoration: none;
  }


  /* ==== Colors ==== */
  body {
    background-color: ${th("colors.white.500")};
  }

  /* ==== Print rules ==== */
  @page {
    size: A4;
    margin: 0;
  }
  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
    }
  }
`;

export default GlobalStyle;
