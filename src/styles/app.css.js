import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    gap: 4rem;

    @media screen and (max-width: 1080px) {
        flex-direction: column;
        justify-content: center;
        gap: 0;
    }
`
export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-family: 'Pacifico', cursive;
    font-size: 7rem;
    color: var(--secondary-color);
    text-shadow: 
        0 0 0.45rem var(--primary-color),
        0 0 0.625rem var(--primary-color),
        0 0 2.625rem var(--secondary-color),
        0 0 4.8rem var(--secondary-color),
        0 0 6.25rem var(--secondary-color);

    transition: all .6s ease-in-out;
    &:hover, &:focus {
        transform: scale(1.3);
    }
`
export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1080px) {
        flex-direction: row;
        padding: 2rem;
    }
`
export const ResultsContainer = styled.div`
    display: flex;
    gap: 3rem;
    flex-direction: column;
    justify-content: center;
`