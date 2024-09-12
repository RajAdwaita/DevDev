'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const SignupComponent = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();


    const handleClick = async () => {
        try {

            const response = await axios.post('http://localhost:3000/api/user',
                {

                    username: username,
                    password: password

                }
            )
            // console.log(username);

            await console.log(response.data);
            router.push('/signin')
        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        <>
            <div className='flex items-center justify-center h-screen -mt-8'>
                <div className='flex flex-col bg-gray-300 py-12 px-12 space-y-4 rounded-xl shadow-lg '>
                    <div className='flex justify-center items-center p-2 mb-12  bg-black text-white text-3xl font-semibold'>SIGNUP</div>
                    <div className=' flex flex-col space-y-5'>

                        <div className='flex flex-col space-y-1'>

                            <label htmlFor="" className='font-bold text-lg'>Username</label>
                            <input type="text" placeholder='username' className='outline-none p-2' onChange={(e) => {
                                setUsername(e.target.value)
                            }} />
                        </div>

                        <div className='flex flex-col space-y-1'>

                            <label htmlFor="" className='font-bold text-lg'>Password</label>
                            <input type="text" placeholder='password' className='outline-none p-2' onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <div className='flex items-center  justify-center text-center'>
                            <button className=' p-2 bg-black text-white h-12 w-20 rounded-full shadow-md' onClick={handleClick}>Signup</button>
                        </div>



                        {/* <label htmlFor="">Password </label>
                        <input type="text" placeholder='password' /> */}
                    </div>
                    {/* <div className='flex flex-col '> */}

                    {/* </div> */}
                </div>
            </div>
        </>

    )
}

export default SignupComponent