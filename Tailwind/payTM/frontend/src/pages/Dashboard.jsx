import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'
import Users from '../components/USers'
import { Navigate, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    // const [amount, setAmount] = useState(10000)

    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            if (token == "") {
                navigate('/login')
            }
        }
        catch (error) {
            console.log(error);

        }
    })
    return (
        <>
            <Appbar />
            <div className='mt-20 ml-20 '>
                <Balance />
                <Users />
            </div>



        </>
    )
}

export default Dashboard