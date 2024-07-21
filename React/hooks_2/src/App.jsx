
import { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from 'axios';
import Todos from './components/Todos';
import useTodos from './components/useTodos';
// const axios = require('axios')
function App() {
  const [id, setId] = useState(1);
  // const [counter, setCounter] = useState(0)
  // const [n, setN] = useState(0)
  // const [sum, setSum] = useState(0)

  // let sum = useMemo(() => {
  //   let cnt = 0;
  //   for (var i = 1; i <= n; i++) {
  //     cnt += i;
  //   }
  //   return cnt;

  // }, [n])
  const todo = useTodos(id);
  return (
    <>
      <button onClick={() => {
        setId(1)
      }}>1</button>

      <button onClick={() => {
        setId(2)
      }}>2</button>

      <button onClick={() => {
        setId(3)
      }}>3</button>

      <button onClick={() => {
        setId(4)
      }}>4</button>



      <Todos todo={todo} />
      {/* ////////////////////////////////////////////////////////////// */}


      {/* 
      <input type="number" onChange={(e) => {
        let n = e.target.value;
        setN(n);
        // var i = 1;
        // var s = 0;
        // for (i = 1; i <= n; i++) {
        //   s = s + i;
        // }
        // setSum(s);
      }} />
      <h3>SUM IS {sum}</h3>
      <button onClick={() => {
        setCounter(counter + 1)
      }}>Counter {counter}</button> */}






    </>
  )
}

export default App
