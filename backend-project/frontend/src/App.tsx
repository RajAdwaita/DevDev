
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import CreateBlog from './pages/CreateBlog'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create' element={<CreateBlog />}></Route>
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='/blog/:id' element={<Blog />}></Route>
          {/* <Route path='' element={ }></Route> */}



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
