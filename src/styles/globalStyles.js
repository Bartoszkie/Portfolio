import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, 
    *::after, 
    *::before {
        margin: 0; 
        padding: 0; 
        box-sizing: inherit;
    }

    ::selection {
        color: #fff;
        background: #950740;
    }

    a {
        text-decoration: none;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;

        @media only screen and (max-width: 75em) { 
            font-size: 56.25%; 
        }
    
        @media only screen and (max-width: 56.25em) { 
            font-size: 50%; 
        }
    
        @media only screen and (min-width: 112.5em) {
            font-size: 75%; 
        }

    }

    small {
        font-size: 110%;

        @media only screen and (max-width: 56.25em)  {
            font-size: 130%;
        }
    }

    .App {
        display: grid;
        grid-template-columns: [full-start] 16.66666667% [center-start] repeat(8, minmax(min-content, 14rem)) [center-end] minmax(6rem, 1fr) [full-end];
        height: 100vh;
    }
`;