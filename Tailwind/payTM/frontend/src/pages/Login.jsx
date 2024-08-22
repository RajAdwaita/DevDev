import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios';



const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")

    const [password, setPassword] = useState("")

    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            if (token != "") {
                navigate('/dashboard')
            }
            else {
                navigate('/login')
            }
        }
        catch (error) {
            console.log(error);

        }

    }, [])

    const handleSubmit = (async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:3000/api/v1/user/login',
                {
                    userName: userName,
                    password: password
                },

            )
            if (response.data.success) {

                await toast.success("Login Successful")
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000)
            }
            else {
                await toast.error("Invalid Credentials")
            }

        }
        catch (error) {
            await toast.error("Failed to Login");
            console.log(error);

            setTimeout(() => {
                window.location.reload();
            }, 2000)
        }




    })


    return (

        <>

            <div className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-2xl mb-4">Login</div>
                        <div className="text-center text-sm mb-6">
                            Login to your account
                        </div>
                    </div>




                    <form action="" method="post" onSubmit={handleSubmit}>
                        <div className="space-y-4">


                            <div className="flex flex-col">
                                <label className="mb-1">User Name</label>
                                <input type="text" placeholder="User Name" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setUserName(e.target.value)
                                }} />
                            </div>

                            <div className="flex flex-col">
                                <label className="mb-1">Password</label>
                                <input type="password" placeholder="Password" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setPassword(e.target.value)
                                }} />
                            </div>
                            <div className="mt-6">
                                <button className="w-full py-2 bg-blue-800 text-white rounded-full">Login</button>
                            </div>
                        </div>
                    </form>




                    <div className="flex justify-center mt-4">
                        <span className="text-sm">Create an account? </span>
                        <Link className="underline ml-1 text-sm text-blue-500" to={'/signup'}>Sign Up</Link>

                        {/* <a className="underline ml-1 text-sm text-blue-500" href="/signup">Sign Up</a> */}
                    </div>
                </div>
            </div >
            <Toaster />

        </>
    )

}

export default Login