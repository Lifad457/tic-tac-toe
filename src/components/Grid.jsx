import { useState } from "react";
import { GridContainer, StyledGrid } from "../styles/grid.css";
import Circle from "./Circle";
import Cross from "./Cross";

export default function Grid() {
    const [current, setCurrent] = useState(<Circle />)
    const [grid, setGrid] = useState([
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
        { id: 9, value: null },
    ])

    function handleClick(e) {
        const target = e.target.id
        setGrid(grid.map((item) => {
            if (item.id == target && !item.value) {
                item.value = current
                setCurrent(current.type.name==='Circle' ? <Cross /> : <Circle />)
                return item
            }
            return item
        }))
    }
    console.log(grid)
    return (
        <GridContainer>
            <StyledGrid id='1' className='one' onClick={handleClick}>
                { grid[0].value && grid[0].value}
            </StyledGrid>
            <StyledGrid id='2' className='two' onClick={handleClick}>
                { grid[1].value && grid[1].value}
            </StyledGrid>
            <StyledGrid id='3' className='three' onClick={handleClick}>
                { grid[2].value && grid[2].value}
            </StyledGrid>
            <StyledGrid id='4' className='four' onClick={handleClick}>
                { grid[3].value && grid[3].value}
            </StyledGrid>
            <StyledGrid id='5' className='five' onClick={handleClick}>
                { grid[4].value && grid[4].value}
            </StyledGrid>
            <StyledGrid id='6' className='six' onClick={handleClick}>
                { grid[5].value && grid[5].value}
            </StyledGrid>
            <StyledGrid id='7' className='seven' onClick={handleClick}>
                { grid[6].value && grid[6].value}
            </StyledGrid>
            <StyledGrid id='8' className='eight' onClick={handleClick}>
                { grid[7].value && grid[7].value}
            </StyledGrid>
            <StyledGrid id='9' className='nine' onClick={handleClick}>
                { grid[8].value && grid[8].value}
            </StyledGrid>
        </GridContainer>
    )
}