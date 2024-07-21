// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div style={{ background: 'red' }}>
                WELCOME TO BENGAL



                <button onClick={() => {
                    navigate('/')
                }}>LANDING</button>
                <button onClick={() => {
                    navigate('/dashboard')
                }}>DASHBOARD</button>

            </div>
        </>
    )
}

export default Navbar