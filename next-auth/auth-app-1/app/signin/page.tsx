'use client'

import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const page = () => {
    const router = useRouter();
    return (
        <>

            <div className='flex flex-col justify-center items-center'>
                <button onClick={async () => {
                    // signIn()
                    const res = await signIn('credentials', {
                        username: "",
                        email: "",
                        password: "",
                        redirect: false
                    });
                    console.log(res);
                    router.push('/')

                }}>Login with email</button>


                <button onClick={async () => {
                    await signIn('google')
                }}>Login with Google</button>



                <button onClick={async () => {
                    await signIn('github')
                }}>Login with GitHub</button>
            </div>

        </>
    )
}

export default page