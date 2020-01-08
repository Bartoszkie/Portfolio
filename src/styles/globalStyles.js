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
    }

    .App {
        display: grid;
        grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, minmax(min-content, 14rem)) [center-end] minmax(6rem, 1fr) [full-end];
        height: 100vh;
    }
`;