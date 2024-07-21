
import { RecoilRoot } from 'recoil'
import './App.css'
// import Buttons from './components/Buttons'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <RecoilRoot>
        {/* <Buttons /> */}
        <Navbar />
      </RecoilRoot>

    </>
  )
}

export default App
