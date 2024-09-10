'use client'
import { log } from 'console'
import React, { useState } from 'react'
import Button from './Button'


const SigninComponent = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    return (
        <>

            <div className='flex items-center justify-center h-screen -mt-8 '>
                <div className='flex flex-col bg-gray-300 py-12 px-12 space-y-4 rounded-xl shadow-lg '>
                    <div className='flex justify-center items-center p-2 mb-12  bg-black text-white text-3xl font-semibold'>SIGNIN</div>
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


                        <Button username={username} password={password} />



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

export default SigninComponent