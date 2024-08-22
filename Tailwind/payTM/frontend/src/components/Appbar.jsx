import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'


const Appbar = () => {
    const navigate = useNavigate();

    const [showDiv, setShowDiv] = useState(false)

    const handleButtonClick = () => {
        setShowDiv(!showDiv)
    }

    const handleLogout = () => {
        toast.success('Logged Out')
        localStorage.setItem("token", "");

        setTimeout(() => {
            navigate('/login')
        }, 2000)

        console.log("Logged Out")

    }



    return (
        <>
            <div className='flex justify-between p-3 bg-black text-white text-lg'>
                <div className='font-medium'>TayPM App</div>
                <div className='flex justify-between gap-5 items-center'>
                    <div className='font-semibold'>Hello</div>
                    <div className='bg-white h-9 w-9 font-bold text-xl text-black rounded-full flex items-center justify-center'>
                        <button className='' onClick={handleButtonClick}>A</button>
                    </div>

                    {
                        showDiv &&
                        <div className='absolute top-20 right-8 px-10  py-3 bg-black text-white'>
                            <div className='flex mb-2'>Adwaita</div>
                            <div><button onClick={handleLogout}>Logout</button></div>
                        </div>
                    }

                </div>

            </div>
            <Toaster />
        </>
    )
}

export default Appbar