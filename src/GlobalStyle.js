import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    :root{
        --blue-primary: #09456c;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        --white-bg: #fff;
        --gray-1: #d1d1d1;
        --deep-dark: #1E1E1E;
        --gray-2: #363636;
        --white : white;
        --black: black;
        --dark-bg: #262626;
        --deep-dark: #1E1E1E;
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        color: white;
    }
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
        font-size: 1rem;
        margin-top: var(--flow-space, 1em);
    }
    h2{
        font-size: 2rem;
    }

    //Utilities
    .c-para{
        text-align: center;
    }

    * {
    box-sizing: border-box;
  }


  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
  
`;

export default GlobalStyle;