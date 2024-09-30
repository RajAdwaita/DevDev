import axios from 'axios'
import React, { useState } from 'react'


const Signin = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const BACKEND_URL = "http://localhost:3000"
    const handleClick = async () => {


        try {
            const response = await axios.post(`${BACKEND_URL}/signin`,
                {
                    username,
                    password
                },
                {
                    withCredentials: true,
                }
            )

            console.log(response);

        }
        catch (error) {
            console.log(error);

        }






    }
    return (
        <>

            <div className='flex items-center justify-center h-screen'>
                <div className='p-20 border border-gray-400 shadow-2xl '>
                    <div className='mb-20 flex items-center justify-center bg-yellow-300 p-2  rounded-full shadow-sm'>
                        Signin
                    </div>
                    <div className='space-y-8'>

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='username' className='border border-gray-200 p-1 outline-none' onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">Password</label>
                            <input type="text" placeholder='password' className='border border-gray-200 p-1 outline-none' onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-8'>
                        <button className='h-12 w-20  p-2 bg-orange-300 rounded-full shadow-lg' onClick={handleClick}>Signin</button>
                    </div>



                </div>
            </div>


        </>
    )
}

export default Signin