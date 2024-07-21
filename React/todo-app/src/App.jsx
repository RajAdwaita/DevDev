
import './App.css'
import { useState } from 'react';
const App = () => {

  const [todos, setTodos] = useState([
    {
      title: "GATE",
      desc: "Computer networks",
      completed: false
    },
    {
      title: "Codeforces",
      desc: "Upsolve",
      completed: true
    },
    {
      title: "GYM",
      desc: "Fitness",
      completed: true
    },
    {
      title: "Sleep",
      desc: "Need Rest to Recover",
      completed: false
    },
  ])



  return (

    <div>
      <input name='title' type="text"></input>
      <input name='desc' type="text"></input>
      <input name='completed' type="text"></input>
      <button onClick={() => {
        setTodos([...todos, {
          title: "Title",
          desc: "description",
          completed: false
        }])
      }} >ADD TODO</button>


      {
        todos.map((todo, id) => (
          // console.log(todo);

          <Todo key={id} title={todo.title} desc={todo.desc} completed={todo.completed} />

        ))
      }

      {/* <DarkTheme todos={todos} /> */}
    </div>
  )
}


// const DarkTheme = ({ todos }) => {
//   return (
//     <div style={{ background: "white", color: "blue" }}>
//       {
//         todos.map((todo, id) => (
//           <Todo key={id} title={todo.title} desc={todo.desc} completed={todo.completed} />


//           // return
//           // <div></div>
//         )

//         )
//       }</div>

//   )

// }

const Todo = ({ title, desc, completed }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <h3> {completed ? "DONE" : "NOT DONE"}</h3>
    </>
  )

}

export default App
