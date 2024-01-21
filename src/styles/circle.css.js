import styled from "styled-components";
import BG from "../assets/images/bg.jpg";

export const CircleContainer = styled.div`
    margin: 0 auto;
`
export const StyledCircle = styled.div`
    position: relative;
    width: 11rem;
    height: 11rem;
    border-radius: 100vh;
    box-shadow: var(--circle-shadow);
    background-color: var(--secondary-color);

    &::before {
        content: "";
        position: absolute;
        top: 1.52rem;
        left: 1.52rem;
        width: 8rem;
        height: 8rem;
        border-radius: 100%;
        box-shadow: 
            inset 0 0 0.45rem var(--secondary-color),
            inset 0 0 0.625rem var(--circle-color),
            inset 0 0 2.625rem var(--circle-color),
            inset 0 0 3.8rem var(--circle-color);
        background-image: url(${BG});
        background-size: contain;
    }
`