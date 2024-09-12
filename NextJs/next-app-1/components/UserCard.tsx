'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const UserCard = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        async function getData() {

            try {

                const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details')
                console.log(response.data);
                const data = await response.data;
                await setName(data.name)
                await setEmail(data.email)
                await setLoading(false);




            } catch (error) {
                console.log(error);

            }



        }
        getData();
    }, [])


    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                Loading...
            </div>
        )
    }
    return (
        <>
            <div className='flex justify-center items-center h-screen'>

                <div className='flex-col justify-center items-center w-screen max-w-md px-20 py-40 bg-black '>
                    <div className='flex justify-center items-center text-white '>{name}</div>
                    <div className='flex justify-center items-center text-white '>{email}</div>

                </div>
            </div>





        </>
    )
}

export default UserCard