import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

interface Todo {
  title: string, description: string,
}


function GetTodos(todo: Todo) {
  return (
    <div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <GetTodos title="ADWAITA" description="WELCOME TO HELL" />

    </>
  )
}

export default App
