import styled from "styled-components";

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(15rem, 1fr));
    grid-template-rows: repeat(3, minmax(15rem, 1fr));
    margin: auto 10rem;
    cursor: pointer;
    
    .one {
        border-top: none;
        border-left: none;
    }
    .two {
        border-top: none;
    }
    .three {
        border-top: none;
        border-right: none;
    }
    .four {
        border-left: none;
    }
    .six {
        border-right: none;
    }
    .seven {
        border-bottom: none;
        border-left: none;
    }
    .eight {
        border-bottom: none;
    }
    .nine {
        border-bottom: none;
        border-right: none;
    }
`
export const StyledGrid = styled.div`
    display: flex;
    align-items: center;
    border: .1rem solid var(--secondary-color);
`