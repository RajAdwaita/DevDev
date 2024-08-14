import React, { useState } from 'react'

const Transactions = ({ period }) => {
    const [curr, setCurr] = useState("payout")
    return (
        <>
            <div>
                <div className='text-xl font-semibold'>
                    Transactions | {period}

                </div>

                <div className='mt-5 flex gap-3'>

                    <button className={`p-2 rounded-full text-lg  ${curr == 'payout' ? 'bg-[#146EB4]' : ' bg-[#E6E6E6]'}  px-4`} onClick={() => {
                        setCurr("payout")

                    }}>Payout (22)</button>
                    <button className={`p-2 rounded-full text-lg ${curr == 'refunds' ? 'bg-[#146EB4]' : ' bg-[#E6E6E6]'} px-4`} onClick={() => {
                        setCurr("refunds")
                    }} >Refunds (6)</button>

                </div>


                <div className=' flex justify-between mt-7 bg-gray-100  p-2'>
                    <div className='flex flex-grow justify-start'>
                        <div className='relative w-full max-w-sm'>
                            <svg className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <input
                                type="text"
                                className='bg-white-200 border border-gray-300 rounded-md p-2 pl-10 w-full outline-none'
                                placeholder='Order ID or Transaction ID.'
                            />
                        </div>
                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='flex bg-white border border-black rounded-md p-2 gap-1 cursor-pointer'>Sort <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                        </div>
                        <div className='bg-white border border-black rounded-md p-2 cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Transactions