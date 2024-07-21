
import { useEffect, useState } from 'react';
import './App.css'
import Header from './components/Header';

function App() {
  const [header, setHeader] = useState("")

  useEffect(() => {
    setHeader("HOWRAH")
  }, [])
  return (
    <>
      <div>

        <Header header={header} />
        <button onClick={(e) => {
          console.log(e.target);
          header === "HOWRAH" ? setHeader("KOLKATA") : setHeader("HOWRAH")
        }}>SWAP</button>
        <Header header="CHENNAI" />
        <Header header="DELHI" />
        <Header header="MANIPUR" />
      </div>

    </>
  )
}

export default App
