import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

const User = () => {

  const [data, setData] = useState()
  const BACKEND_URL = "http://localhost:3000"


  useEffect(() => {

    try {


      async function getData() {
        const response = await axios.get(`${BACKEND_URL}/user`,
          {
            withCredentials: true
          }
        )

        setData(response.data);

      }


      getData();
      console.log("Data Fetched");



    }

    catch (error) {
      console.log(error);

    }


  }, [])


  const handleClick = async () => {
    const response = await axios.post(`${BACKEND_URL}/logout`, {

    }, {
      withCredentials: true
    })

    console.log(response);

  }


  return (
    <>
      <div>
        <div>Your ID is : {data?.userId}</div>

        <div><button onClick={handleClick}>Logout</button></div>
      </div>


    </>
  )
}

export default User