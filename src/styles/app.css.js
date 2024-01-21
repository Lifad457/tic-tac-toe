import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    justify-content: center;
`
export const Title = styled.h1`
    display: flex;
    align-items: center;
    padding-left: 5rem;
    font-family: 'Pacifico', cursive;
    font-size: 7rem;
    color: var(--secondary-color);
    text-shadow: 
        0 0 0.45rem var(--primary-color),
        0 0 0.625rem var(--primary-color),
        0 0 2.625rem var(--secondary-color),
        0 0 4.8rem var(--secondary-color),
        0 0 6.25rem var(--secondary-color);
`