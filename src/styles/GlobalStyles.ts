import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* ----------- Import Font ----------- */
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

  /* ----------- Default Setup ----------- */
  * {
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font.family};
    box-sizing: border-box;

    // Remove element selections
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  // Remove list style
  ul {
    list-style-type: none;
  }

  // Remove link sublines
  a {
    text-decoration: none;
  }

  /* ----------- Custom ScrollBar ----------- */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #ffffffbd #03020f;
  }

  // Chrome, Edge, and Safari
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #03020f;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffffb7;
    border-radius: 20px;
  }

  *::-webkit-scrollbar-thumb:hover {
    background: #ffffffef;
  }
`;

export default GlobalStyles;
