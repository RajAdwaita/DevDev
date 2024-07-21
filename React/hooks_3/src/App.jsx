import { memo, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0)

  // function onClick() {
  //   console.log("child clicked")
  // }

  const onClick = useCallback(
    () => {

      console.log("child clicked")
    },
    [],
  )


  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

// eslint-disable-next-line react/display-name
const Child = memo(({ onClick }) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;