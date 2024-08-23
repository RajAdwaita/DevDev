import Axios from 'axios';  // Correct import statement
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

const Send = () => {

    const navigate = useNavigate();
    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            if (token) {
                // navigate('/send')
            }
            else {
                navigate('/signup')
            }
        }
        catch (error) {
            console.log(error);

        }

    }, [navigate])




    const [amount, setAmount] = useState(0);
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const user = searchParams.get('name');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("A");

        try {
            const token = await localStorage.getItem('token');
            const response = await Axios.post('http://localhost:3000/api/v1/account/transfer',
                {
                    to: id,  // Use id directly
                    amount: amount
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            await toast.success("Transaction Successful")
            console.log(response.data);
        } catch (error) {
            await toast.error("Transaction Failed")

            console.log(error);
        }
    }

    return (
        <>
            <div className='flex items-center justify-center min-h-screen bg-gray-200'>
                <div className='p-8 w-full max-w-md bg-white shadow-lg'>
                    <div className='flex items-center justify-center text-2xl font-bold'>
                        Send Money
                    </div>
                    <div className='flex items-center mt-6'>
                        <div className='flex items-center justify-center bg-green-500 h-12 w-12 rounded-full font-bold text-2xl text-white'>{user[0]}</div>
                        <div className='p-1 font-medium text-lg ml-4'>{user}</div>
                    </div>

                    <div className='mt-4 text-md font-medium'>
                        Amount in Rs.
                    </div>
                    <div className='mt-3'>
                        <form className='flex flex-col' action='' method='post' onSubmit={handleSubmit}>
                            <input
                                type="number"
                                className='border border-black-2 p-2 focus:outline-none'
                                placeholder='Enter Amount'
                                onChange={(e) => setAmount(Number(e.target.value))}
                            />
                            <button
                                type="submit"
                                className='bg-green-500 p-2 mt-4 rounded-md text-white font-semibold text-lg'

                            >
                                Make Transfer
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
}

export default Send;
