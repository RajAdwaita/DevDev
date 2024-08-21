import React from 'react'

const Login = () => {
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
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label className="mb-1">User Name</label>
                            <input type="text" placeholder="User Name" className="p-2 bg-gray-100 border border-gray-300 rounded-md" />
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-1">Password</label>
                            <input type="password" placeholder="Password" className="p-2 bg-gray-100 border border-gray-300 rounded-md" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-2 bg-blue-800 text-white rounded-full">Login</button>
                    </div>
                    <div className="flex justify-center mt-4">
                        <span className="text-sm">Create an account? </span>
                        <a className="underline ml-1 text-sm text-blue-500" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login