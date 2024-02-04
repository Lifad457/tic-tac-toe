import { useEffect, useState } from 'react'
import Grid from './components/Grid'
import { Container, Results, ResultsContainer, Title, TitleContainer } from './styles/app.css'
import { GlobalStyles } from './styles/global.css'
import Circle from "./components/Circle";
import Cross from "./components/Cross";
import Button from './components/Button';

export default function App() {
    const [current, setCurrent] = useState(<Circle />)
    const [grid, setGrid] = useState([
        { id: 0, value: null },
        { id: 1, value: null },
        { id: 2, value: null },
        { id: 3, value: null },
        { id: 4, value: null },
        { id: 5, value: null },
        { id: 6, value: null },
        { id: 7, value: null },
        { id: 8, value: null },
    ])
    const [winner, setWinner] = useState(null)

    useEffect(() => {
        function checkWinner() {
            const winningCombos = [
                [1, 2, 3],
                [1, 4, 7],
                [1, 5, 9],
                [2, 5, 8],
                [3, 5, 7],
                [3, 6, 9],
                [4, 5, 6],
                [7, 8, 9]
            ]
            let itsWin = false
            winningCombos.map((item) => {
                const [a, b, c] = item
                if (grid[a-1].value !== null 
                    && grid[a-1].value?.type.name === grid[b-1].value?.type.name 
                    && grid[b-1].value?.type.name === grid[c-1].value?.type.name) {
                    setTimeout(() => {
                        setWinner(grid[a-1].value.type.name)
                        itsWin = true
                    }, 500)
                    
                }
            })
            if (grid.every(item => item.value !== null) && !itsWin) {
                setTimeout(() => {
                    setWinner('Draw')
                }, 500)
            }
        }
        checkWinner()
    }, [grid])

    function handleClick(e) {
        const target = e.target.id
        grid[target].value === null && setCurrent(current.type.name==='Circle' ? <Cross /> : <Circle />)
        setGrid(prevGrid => prevGrid.map(item => (
            item.id.toString() === target && !item.value ? 
            {...item, value: current.type.name==='Circle' ? <Circle id={target} /> : <Cross id={target} />} 
            : {...item}
        )))
    }

    return (
        <>
            <GlobalStyles />
            <Container>
                { winner ? 
                    <ResultsContainer>
                        <Results>
                            {
                                winner === 'Draw' ? 
                                    'Draw!' 
                                    : 
                                    `${winner} wins!`
                            }
                        </Results> 
                        <Button setGrid={setGrid} setWinner={setWinner} setCurrent={setCurrent} />
                    </ResultsContainer>
                    : 
                    <>
                        <TitleContainer>
                            <Title>Tic</Title>
                            <Title>Tac</Title>
                            <Title>Toe</Title>
                        </TitleContainer>
                        <Grid grid={grid} handleClick={handleClick} />
                    </>
                } 
            </Container>
        </>
    )
}