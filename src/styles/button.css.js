import styled from "styled-components";

export const StyledButton = styled.div`
    display: inline-block;
    padding: .5rem 2.5rem 1rem;
    margin: .8rem auto;
    border-radius: 1rem;
    border: .1rem solid var(--secondary-color);
    cursor: pointer;
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    color: var(--secondary-color);
    text-shadow: 
        0 0 0.45rem var(--primary-color),
        0 0 0.625rem var(--primary-color),
        0 0 2.625rem var(--secondary-color),
        0 0 4.8rem var(--secondary-color),
        0 0 6.25rem var(--secondary-color);
    box-shadow: 
        0 0 0.45rem var(--primary-color),
        0 0 0.625rem var(--primary-color);

    transition: all .3s ease-in-out;
    &:hover, &:focus {
        transform: scale(1.1);
    }
`