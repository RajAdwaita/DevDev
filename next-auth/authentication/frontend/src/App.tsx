
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './components/Signin'
import Signup from './components/Signup'
import User from './components/User'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/signup' element={<Signup />} ></Route>
          <Route path='/user' element={<User />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
