import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    @media screen and (min-width: 1080px) {
        flex-direction: row;
    }
`
export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    font-family: 'Pacifico', cursive;
    font-size: 7rem;
    color: var(--secondary-color);
    padding: .5rem;
    margin: 0 auto;

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
    flex-direction: row;
    margin: 0 auto;
    padding: 0 5rem;

    @media screen and (min-width: 1080px) {
        flex-direction: column;
        margin: auto;
    }
`
export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Results = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Pacifico', cursive;
    font-size: 7rem;
    color: var(--secondary-color);
    padding: .5rem;
    margin: auto;

    text-shadow: 
        0 0 0.45rem var(--primary-color),
        0 0 0.625rem var(--primary-color),
        0 0 2.625rem var(--secondary-color),
        0 0 4.8rem var(--secondary-color),
        0 0 6.25rem var(--secondary-color);

    transition: all .6s ease-in-out;
    &:hover, &:focus {
        transform: scale(1.2);
    }
`