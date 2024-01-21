import styled from "styled-components";

export const CrossContainer = styled.div`
    margin: 0 auto;
`
export const StyledCross = styled.div`
    position: relative;
    border-radius: 100vh;
    width: 13rem;
    height: 1.8rem;
    rotate: 45deg;
    background-color: var(--secondary-color);
    box-shadow: var(--cross-shadow);

    &::after {
        content: '';
        position: absolute;
        width: 13rem;
        height: 1.8rem;
        rotate: 90deg;
        border-radius: 100vh;
        background-color: var(--secondary-color);
        box-shadow: var(--cross-shadow);
    }

    &::before {
        content: '';
        position: absolute;
        border-radius: 100vh;
        width: 13rem;
        height: 1.8rem;
        background-color: var(--secondary-color);
        z-index: 99;
    }
`
