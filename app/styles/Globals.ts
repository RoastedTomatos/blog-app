import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Merriweather';
    src: url('./app/assets/fonts/Merriweather-Regular.ttf');
    font-weight: 400;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.color.background};
    font-family: 'Meriweather', sans-serif;
  }

  h1 {
    font-weight: 700;
  }
`;
