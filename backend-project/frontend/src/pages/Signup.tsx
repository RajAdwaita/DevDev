import axios, { isAxiosError } from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../config'
import toast, { Toaster } from 'react-hot-toast'

// type Props = {}

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${BACKEND_URL}/user/signup`,
                {
                    email: email,
                    name: name,
                    password: password
                }
            )
            const token = await response.data.token;
            await localStorage.setItem('token', token);

            console.log("RESPONSE: " + response);


            await toast.success('Account Created!')
            setTimeout(() => {
                navigate('/login')
            }, 2000)

        }

        catch (error) {
            console.log("ERROR: " + error);
            await toast.error("Account Creation Failed!")

            // setTimeout(() => {
            //     window.location.reload();
            // }, 2000)

        }


    }
    return (
        <>

            <div className='grid  grid-cols-1 md:grid-cols-2 h-screen w-screen'>
                <div className='bg-white flex items-center justify-center'>
                    <div className='flex-row space-y-5'>
                        <div className='flex-row text-center'>
                            <div className='font-bold text-3xl'>Create an Account</div>
                            <div className='text-md font-small'>Already have an account? <Link className='underline' to={'/login'}>Login</Link></div>
                        </div>

                        <form action="" method="post" onSubmit={handleSubmit}>
                            <div className='space-y-4 mt-16'>
                                <div className='flex flex-col space-y-2'>

                                    <label className='font-semibold' htmlFor="">Email</label>
                                    <input className='border rounded-sm border-gray-400 focus:outline-none text-sm p-2' type="text" onChange={(e) => {
                                        setEmail(e.target.value)
                                    }} />
                                </div>
                                <div className='flex flex-col space-y-2 '>
                                    <label className='font-semibold' htmlFor="">Username</label>
                                    <input className='border rounded-sm border-gray-400 focus:outline-none text-sm p-2' type="text" onChange={(e) => {
                                        setName(e.target.value)
                                    }} />
                                </div>
                                <div className='flex flex-col space-y-2'>
                                    <label className='font-semibold' htmlFor="">Password</label>
                                    <input className='border rounded-sm border-gray-400 focus:outline-none text-sm p-2' type="text" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                                <div className='flex items-center justify-center bg-black text-white p-2 rounded-lg text-lg font-md'>
                                    <button className='text-center' type="submit">Signup</button>
                                </div>
                            </div>


                        </form>
                    </div>





                </div>
                <div className='bg-gray-300 flex items-center justify-center invisible md:visible'>
                    <div className='p-2 mx-28'>

                        <div className='font-bold text-xl'>"Your reputation is more important than your paycheck, and your integrity is worth more than your career." </div>
                        <div className='font-medium text-lg mt-5'>Ryan Freitas</div>
                        <div className='font-semibold text-sm mt-1'>About.com Co-founder</div>
                    </div>

                </div>
            </div>

            <Toaster />
        </>
    )
}


export default Signup