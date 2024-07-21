
import { useEffect, useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => {
        setTodos(data.todos);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []); // Empty dependency array ensures this runs once after the initial render

  // fetch("http://localhost:3000/todos")
  //   .then(async (res) => {
  //     const json = await res.json();
  //     // console.log(res.json());
  //     setTodos(json.todos);
  //   })

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }
  return (
    <>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos} />

    </>
  )
}

export default App
