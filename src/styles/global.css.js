import { createGlobalStyle } from 'styled-components';
import BG from "../assets/images/bg.jpg";

export const GlobalStyles = createGlobalStyle`
    *, *&:before, *&:after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    &:root {
        --primary-color: rgb(235, 26, 130);
        --secondary-color: rgb(250, 239, 239);
        --circle-color: rgb(230, 18, 36);
        --cross-color: rgb(7, 235, 37);

        --circle-shadow: ${`
            0 0 0.45rem var(--secondary-color),
            0 0 0.625rem var(--secondary-color),
            0 0 2.625rem var(--circle-color),
            0 0 3.8rem var(--circle-color),
            0 0 4.2rem var(--circle-color);
        `};
        --cross-shadow: ${`
            0 0 0.45rem var(--secondary-color),
            0 0 0.625rem var(--secondary-color),
            0 0 2.625rem var(--cross-color),
            0 0 3.8rem var(--cross-color),
            0 0 4.2rem var(--cross-color);
        `};
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url(${BG});
        background-size: cover;
        min-height: 100dvh;

        @media screen and (min-width: 1080px) {
            flex-direction: row;
                align-items: center;
        }
    }
`
