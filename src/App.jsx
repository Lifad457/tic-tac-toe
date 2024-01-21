import Grid from './components/Grid'
import { Container, Title } from './styles/app.css'
import { GlobalStyles } from './styles/global.css'

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Title>Tic<br/>Tac<br/>Toe</Title>
        <Grid />
      </Container>
    </>
  )
}

export default App
