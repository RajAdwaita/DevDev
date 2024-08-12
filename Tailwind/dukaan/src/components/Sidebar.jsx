import React from 'react'
import img from '../assets/logo.png'

const Sidebar = () => {
    return (
        <>
            <div className="w-1/6 bg-[#1E2640] text-white p-2">
                <div className=''>
                    <div className='flex items-center justify-start'>
                        <img className='rounded-full object-cover h-10 w-10' src={img} alt="Profile" />
                        <div className='flex-grow ml-4'>
                            Adwaita
                            <div className='text-white underline'>
                                <a href="/">Link</a>
                            </div>
                        </div>
                        <div className=''>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <ul>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
