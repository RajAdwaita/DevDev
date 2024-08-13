import React from 'react'
import '../css/navbar.css'
import '../index.css'

const Navbar = () => {
    return (
        <>
            <div className='border-2 border-gray bg-[#FFFFFF] flex p-3 items-center'>

                {/* Left Section: Payouts and How it works */}
                <div className='flex gap-3 items-center'>
                    <h2 className='text-lg font-semibold'>Payouts</h2>
                    <h4 className='flex text-xs items-center'>
                        <svg className='w-5 h-5 mr-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        How it works?
                    </h4>
                </div>

                {/* Middle Section: Search Bar with SVG */}
                <div className='flex flex-grow justify-center'>
                    <div className='relative w-full max-w-md'>
                        <svg className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <input
                            type="text"
                            className='bg-gray-200 border border-gray-300 rounded-md p-2 pl-10 w-full outline-none'
                            placeholder='Search, Features, tutorials, etc.'
                        />
                    </div>
                </div>

                {/* Right Section: SVG Icons */}
                <div className='flex gap-3 items-center'>
                    <div className='p-2 rounded-full bg-gray-400'>

                        <svg className='w-6 h-6 text-black-100' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                            <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                        </svg>
                    </div>

                    <div className='p-2 rounded-full bg-gray-400'>
                        <svg className='w-6 h-6 text-black-100' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
