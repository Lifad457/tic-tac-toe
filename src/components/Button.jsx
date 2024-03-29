import { StyledButton } from "../styles/button.css";
import Circle from "./Circle";

export default function Button({ setGrid, setWinner, setCurrent }) {
    function handleClick() {
        setGrid([
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
        setWinner(null)
        setCurrent(<Circle />)
    }
    
    return (
        <StyledButton onClick={handleClick}>
            Play again!
        </StyledButton>
    )
}