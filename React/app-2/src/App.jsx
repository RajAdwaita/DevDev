import { useState } from 'react'

// import './App.css'
// import CustomButton from './CustomButton'

const App = () => {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      {/* <button onClick={() => (
        setCount(count + 1)
      )}>Count = {count}</button > */}

      <CustomButton count={count} setCount={setCount} />
      <CustomButton count={count1} setCount={setCount1} />
      <CustomButton count={count2} setCount={setCount2} />
      <CustomButton count={count} setCount={setCount} />
      <CustomButton count={count} setCount={setCount} />

    </>
  )
}


const CustomButton = ({ count, setCount }) => {
  const onClickHandler = () => {
    setCount(count + 1);
  }

  return (
    <button onClick={onClickHandler}>Count = {count}</button>
  )

};


export default App;
