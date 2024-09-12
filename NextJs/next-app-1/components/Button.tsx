'use client'

import React, { useState } from 'react'

interface Props {
    username: string,
    password: string
}

const Button = ({ username, password }: Props) => {

    const handleClick = () => {
        console.log(`${username} ${password}`);

    }
    return (
        <>
            <div className='flex items-center  justify-center text-center'>
                <button className=' p-2 bg-black text-white h-12 w-20 rounded-full shadow-md' onClick={handleClick} >Signin</button>
            </div>
        </>
    )
}

export default Button