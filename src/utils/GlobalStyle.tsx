import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
    box-sizing: inherit;
    }

    html{
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Josefin Sans';
    }

    body{
        min-width: 100vw;
        min-height: 100vh;
        /* background-image: linear-gradient(109deg, #fa709a 0%, #fee140 100%); */
        background-image: linear-gradient(110deg, rgb(248, 188, 79) 6%,rgb(211, 21, 87) 94%)

    }
`;

export default GlobalStyle;
