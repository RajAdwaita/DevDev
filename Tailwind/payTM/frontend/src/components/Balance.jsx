import React, { useState, useEffect } from 'react'
import Axios from 'axios'
const Balance = () => {
  const [balance, setBalance] = useState("")


  useEffect(() => {
    async function fetchBalance() {

      try {

        const token = await localStorage.getItem("token")
        const response = await Axios.get('http://localhost:3000/api/v1/account/balance',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )

        setBalance(response.data.balance)

        console.log(response.data.balance);
      }

      catch (error) {
        console.error('Error fetching balance:', error);
        if (error.response && error.response.status === 403) {
          console.error('Unauthorized access - Token might be invalid or expired');
        }
      }

    }
    fetchBalance();
  }, []);





  return (
    <>
      <div className=' flex gap-4 justify-items-center'>
        <div className='text-lg font-medium'>
          Your Balance ::
        </div>
        <div className='text-lg font-medium'>
          {`Rs. ${balance}`}
        </div>
      </div>
    </>
  )
}

export default Balance