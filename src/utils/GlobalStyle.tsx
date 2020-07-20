import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

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
        background-image: linear-gradient(110deg, ${theme.orange} 6%, ${theme.pink} 94%)
       }
`;

export default GlobalStyle;
