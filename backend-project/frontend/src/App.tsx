
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import CreateBlog from './components/CreateBlog'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create' element={<CreateBlog />}></Route>
          {/* <Route path='' element={ }></Route> */}



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
