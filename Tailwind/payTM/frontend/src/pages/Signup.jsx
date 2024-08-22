import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
const signup = () => toast('Account Created.');


const Signup = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            if (token != "") {
                navigate('/dashboard')
            }
            else {
                navigate('/signup')
            }
        }
        catch (error) {
            console.log(error);

        }

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {


            const response = await Axios.post('http://localhost:3000/api/v1/user/signup',
                {
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    password: password
                })
            // console.log(response.data.token);

            localStorage.setItem("token", response.data.token);

            toast.success('Account Created !')
            setTimeout(() => {
                // window.location.reload();
                navigate('/login')
            }, 2000)
        }
        catch (error) {
            toast.error("Failed to create Account");
            console.log(error);

            setTimeout(() => {
                window.location.reload();
            }, 2000)

        }



    }


    return (


        <>
            <div className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-lg">
                    <div className="flex flex-col items-center">
                        <div className="font-bold text-2xl mb-4">Sign Up</div>
                        <div className="text-center text-sm mb-6">
                            Enter Your information to create your account
                        </div>
                    </div>

                    <form action="" method="post" onSubmit={handleSubmit}>


                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="mb-1">User Name</label>
                                <input type="text" placeholder="User Name" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setUserName(e.target.value);

                                }} />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">First Name</label>
                                <input type="text" placeholder="First Name" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setFirstName(e.target.value);

                                }} />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Last Name</label>
                                <input type="text" placeholder="Last Name" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setLastName(e.target.value);

                                }} />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-1">Password</label>
                                <input type="password" placeholder="Password" className="p-2 bg-gray-100 border border-gray-300 rounded-md" onChange={(e) => {
                                    setPassword(e.target.value);

                                }} />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="w-full py-2 bg-blue-800 text-white rounded-full">Sign Up</button>
                        </div>
                    </form>
                    <div className="flex justify-center mt-4">
                        <span className="text-sm">Already have an account? </span>
                        <Link className="underline ml-1 text-sm text-blue-500" to={'/login'}>Login</Link>
                        {/* <a className="underline ml-1 text-sm text-blue-500" href="/login">Login</a> */}
                    </div>
                </div>
            </div >
            <Toaster />
        </>
    );
}

export default Signup;
