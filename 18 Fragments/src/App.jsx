import "./app.css"
import Container from "./components/Container"
import ErrorMessage from './components/ErrorMessage'
import Warriors from './components/Warriors'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
 let warriors = ["Maharathi Radheya Ravindra", "Highness Yuvarani Sruthi", "Srujan", "Yok Shit", "Sanvika pit"]
 
  return (
    <Container>
      <h1 className="titled">Strong Warriors of the Empire</h1>
      <ErrorMessage wars={warriors}></ErrorMessage>
      <Warriors wars={warriors}></Warriors>
    </Container>
  )
}

export default App
