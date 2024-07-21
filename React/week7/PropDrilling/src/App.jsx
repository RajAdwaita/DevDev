import { useContext, useState } from 'react'

import './App.css'
import CountContext from './context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import countAtom from './store/atoms/Count'
import evenSelector from './store/atoms/selector'
const Count = () => {
  return (
    <div>
      {/* <h2>Count: {count}</h2> */}
      <CountRender />
      <Button />
      <Text />
    </div>
  )
}
const CountRender = () => {
  const count = useRecoilValue(countAtom);
  // const count = useContext(CountContext);
  return (
    <div>
      {count}
    </div>
  )
}
const Button = () => {
  // const count = useContext(CountContext);
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  // const cousnt = 0;
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1)
      }}>+</button>
      <button onClick={() => {
        setCount(count => count + 1)
      }} >-</button>
    </div>
  )

}

const Text = () => {
  // const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);

  const disp = (() => {
    return (

      isEven ? "EVEN" : "ODD"

    )
  })
  return (
    <div>
      <p><span>IT is {disp()}</span></p>
    </div>
  )
}

function App() {

  return (
    <>
      {/* <CountContext.Provider value={count} > */}
      <RecoilRoot>
        <Count />

      </RecoilRoot>
      {/* <Count count={count} setCount={setCount} /> */}
      {/* </CountContext.Provider> */}
      {/* <Button count={count} setCount={setCount} /> */}

    </>
  )
}

export default App
