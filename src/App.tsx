import './App.css'
import Logos from './Logos'
import ReactVite from './ReactVite'

import ReadDocs from './ReadDocs'
import UserCard from './UserCard'
import OnlineStatus from './OnlineStatus'
import Button from './components/Button'
import Spacer from './components/Spacer'
import Card from './components/Card'

function App() {
  //  logica

  const users = [
    { name: 'Marco', idade: 37, isOnline: true },
    { name: 'Carla', idade: 20, isOnline: true },
    { name: 'Paulo', idade: 24, isOnline: false },
    { name: 'Stephanie', idade: 24, isOnline: false },
    { name: 'Rodrigo', idade: 22, isOnline: true },
    { name: 'Ibo', idade: 29, isOnline: false },
  ]

  const vamosImprimirIsto = users.map((user, index) => {
    return (
      <UserCard
        key={index}
        name={user.name}
        age={user.idade}
        isOnline={user.isOnline}
      />
    )
  })

  return (
    // impressao do resultado

    <>
      <h1>ola</h1>
      <Card theme="light">
        <h1 style={{ color: '#333' }}>OLA</h1>
        <Button
          variant="secondary"
          label="este é o primary"
          isDisabled={false}
          overideBackground="blue2"
        />
      </Card>

      <Button
        variant="secondary"
        label="este é o primary"
        isDisabled={false}
        overideBackground="blue2"
      />
      <Spacer height={'10rem'} />
      <Button variant="secondary" label="este é secondary" isDisabled={true} />
      {/* {vamosImprimirIsto} */}
      {/* <Logos />
      <ReactVite />
      <Card />
      <ReadDocs />
      OLA <OnlineStatus isOnline={true} />
      OLA <OnlineStatus isOnline={false} />
      OLA <OnlineStatus isOnline={true} /> */}
      <Card theme="dark">
        <Logos />
        <Spacer height={'10rem'} />
        <Button
          variant="secondary"
          label="este é secondary"
          isDisabled={true}
        />
      </Card>

      <Card>
        <img src="https://avatars.githubusercontent.com/u/141697" />
        <h6>Micronesia</h6>
        <h6>Region</h6>
        <h6>Capital</h6>
      </Card>
    </>
  )
}

export default App
