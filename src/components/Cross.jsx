import { CrossContainer, StyledCross } from "../styles/cross.css";

export default function Cross({id}) {
    return (
        <CrossContainer id={id}>
            <StyledCross id={id}></StyledCross>
        </CrossContainer>
    )
} 