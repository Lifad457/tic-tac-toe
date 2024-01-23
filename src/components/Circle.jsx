import { CircleContainer, StyledCircle } from "../styles/circle.css"

export default function Circle({id}) {
    return (
        <CircleContainer id={id}>
            <StyledCircle id={id}></StyledCircle>
        </CircleContainer>
    )
}