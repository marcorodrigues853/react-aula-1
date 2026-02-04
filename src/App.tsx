import './App.css'
import Logos from './Logos'
import ReactVite from './ReactVite'
import Card from './Card'
import ReadDocs from './ReadDocs'
import UserCard from './UserCard'

// const frutas = ["maças", "bananananana"]

// const [primeiraFruta, segundaFruta] = frutas

// function useState(numero){
// return [0,  ()=>{vaiMudarParOnovoNumero(numero)} ]
// }
function App() {
  //  logica
  return (
    // impressao do resultado
    <>
      <Logos />
      <ReactVite />
      <Card />
      <ReadDocs />
    </>
  )
}

export default App
