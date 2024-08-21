import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trial from './components/Trial'
import CreateUser from './components/CreateUser'
import Transactions from './components/Transactions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Send from './pages/Send'
import Login from './pages/Login'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <Trial />
      <CreateUser />

      <Transactions /> */}



      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/send" element={<Send />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
