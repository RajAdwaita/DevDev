import './App.css'
import { RecoilRoot } from 'recoil'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <RecoilRoot>
        <Todo />
      </RecoilRoot>

    </>
  )
}

export default App
