import {createGlobalStyle} from 'styled-components';


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
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    }

    body{
        background-color: var(--neutral-light);
        color: white;
    }

    a{
        color: inherit;
    }
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--blue-primary);
        
    }
    .small-heading{
        font-size: 2.5rem;
        color: var(--blue-primary);
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }

    //Utilities
    .c-para{
        text-align: center;
    }


    * {
    box-sizing: border-box;
  }
  
`;

export default GlobalStyle;