import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import OnlineHooks from './components/OnlineHooks'
import MousePointer from './components/MousePointer'
import Interval from './components/Interval'
import Debounce from './components/Debounce'

function App() {

  return (
    <>
      {/* <Nav /> */}
      {/* <OnlineHooks /> */}
      {/* <MousePointer /> */}
      {/* <Interval /> */}
      <Debounce />
    </>
  )
}

export default App
