import { useState, useEffect, useMemo, useRef } from 'react'
import './App.css'

function App() {
  // const [exchange1Data, setExchange1Data] = useState({});
  // const [exchange2Data, setExchange2Data] = useState({});
  // const [bankData, setBankData] = useState({})

  // console.log("rendered");
  // useEffect(() => {
  //   setExchange1Data({
  //     returns: 100
  //   })
  //   console.log("ex1-renders");


  // }, [])
  // useEffect(() => {
  //   setExchange2Data({
  //     returns: 100
  //   })
  //   console.log("ex2-renders");


  // }, [])


  // useEffect(() => {

  //   setTimeout(() => {
  //     setBankData({
  //       income: 100
  //     })

  //   }, 5000);


  // }, [])

  // const cryptoReturns = useMemo(() => {

  //   return exchange1Data.returns + exchange2Data.returns
  // }, [exchange1Data, exchange2Data])
  // const itr = (cryptoReturns + bankData.income) * 0.3



  // ////////////////////////////////////////////////////////////////////////

  const [incomeTax, setIncomeTax] = useState(200000);

  const divRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10
    }, 5000)
  })

  return (
    <>
      <div>
        {/* <h2>INCOME TAX RETURNS {itr}</h2> */}
        <h2>INCOME TAX = <div ref={divRef}>{incomeTax}</div></h2>
      </div>
    </>
  )
}

export default App
