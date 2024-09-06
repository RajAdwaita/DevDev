// import React from 'react'
import { Link } from 'react-router-dom'

// type Props = {}

const AppBar = () => {
    return (
        <>
            <div className='flex justify-between p-4 bg-gray-100'>
                <Link to={'/blogs'}>
                    <div className='bg-black text-white flex justify-center items-center p-2 shadow-lg font-semibold'>Bedium</div>
                </Link>
                <div className='flex gap-4'>
                    <div className='flex justify-center items-center'>
                        <Link to={'/createBlog'}>
                            <button className='flex justify-center items-center bg-green-500 p-2 rounded-full w-28 font-medium text-md'>Create New</button>
                        </Link>
                    </div>
                    <div className='flex justify-center items-center rounded-full h-9 w-9 bg-gray-900 font-bold text-white shadow-xl'>A</div>
                </div>
            </div>

        </>
    )
}

export default AppBar