import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *, 
    *::after, 
    *::before {
        margin: 0; 
        padding: 0; 
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }

    .App {
        display: grid;
        grid-template-columns: [full-start] minmax(10rem, 1fr) [center-start] repeat(8, minmax(14rem, 18rem)) [center-end] minmax(10rem, 1fr) [full-end];
    }
`;