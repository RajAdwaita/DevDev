import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trial from './components/Trial'
import CreateUser from './components/CreateUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Trial />
      <CreateUser />

    </>
  )
}

export default App
