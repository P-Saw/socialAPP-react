import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    background-color: ${({ theme }) => theme.colors.whiteGrey};
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
