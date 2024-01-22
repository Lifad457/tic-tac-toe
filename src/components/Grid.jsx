import { GridContainer, StyledGrid } from "../styles/grid.css";


export default function Grid({ grid, handleClick }) {
    const classList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const gridElements = classList.map((item, id) => {
        return (
            <StyledGrid key={id} id={id} className={item} onClick={handleClick}>
                { grid[id].value && grid[id].value}
            </StyledGrid>
        )
    })

    return (
        <GridContainer>
            {gridElements}
        </GridContainer>
    )
}
