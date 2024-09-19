'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React from 'react'

// type Props = {}

const AppBar = () => {
    const router = useRouter();
    const session = useSession();

    return (
        <div>
            <button className='bg-blue-300 text-black p-2 shadow-xl rounded-md m-10 cursor-pointer' onClick={() => {
                // router.push('api/auth/signin')
                signIn();

            }}>Signin</button>
            <button className='bg-red-300 text-black p-2 shadow-xl rounded-md m-10 cursor-pointer' onClick={() => {
                // router.push('api/auth/signin')
                signOut();

            }}>Logout</button>

            <div>
                {JSON.stringify(session)}
            </div>
        </div>
    )
}

export default AppBar