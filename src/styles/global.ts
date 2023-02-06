import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body{
    background: ${props => props.theme.background};
    -webkit-font-smoothing: antialiasesd;
  }
  button{
    cursor: pointer;
  }
  
`
