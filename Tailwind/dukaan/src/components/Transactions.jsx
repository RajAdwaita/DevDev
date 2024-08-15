


import React, { useState } from 'react'

const Transactions = ({ period }) => {
    const [curr, setCurr] = useState("payout")
    return (
        <>
            <div>
                <div className='text-xl font-semibold'>
                    Transactions | {period}
                </div>

                <div className='mt-5 flex gap-3 '>
                    <button className={`p-2 rounded-full text-lg ${curr === 'payout' ? 'bg-[#146EB4] text-white' : 'bg-[#E6E6E6] text-gray-500'} px-4`} onClick={() => setCurr("payout")}>
                        Payout (22)
                    </button>
                    <button className={`p-2 rounded-full text-lg ${curr === 'refunds' ? 'bg-[#146EB4] text-white' : 'bg-[#E6E6E6] text-gray-500'} px-4`} onClick={() => setCurr("refunds")}>
                        Refunds (6)
                    </button>
                </div>

                <div className='flex flex-col mt-7 bg-gray-100 p-2'>
                    <div className='flex justify-between'>
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
                        <div className='flex justify-between gap-2'>
                            <div className='flex bg-white border border-black rounded-md p-2 gap-1 cursor-pointer'>
                                Sort
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>
                            </div>
                            <div className='bg-white border border-black rounded-md p-2 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Table Headers shifted to the next line */}
                    <div className='overflow-x-auto mt-5'>
                        <table className='min-w-full'>
                            <colgroup>
                                <col className='w-1/5' />
                                <col className='w-1/5' />
                                <col className='w-1/5' />
                                <col className='w-1/5' />
                                <col className='w-1/5' />

                            </colgroup>

                            <thead className='bg-gray-300 text-gray-600 '>
                                <tr className=''>

                                    <th className='py-[10px] text-left px-6 tracking-wide font-medium text-md'>Order ID</th>
                                    <th className='py-[10px] text-left px-6 tracking-wide font-medium text-md'>Status</th>
                                    <th className='py-[10px] text-left px-6 tracking-wide font-medium text-md'>Transaction ID</th>
                                    <th className='py-[10px] text-left px-6 tracking-wide font-medium text-md'>Refund Date</th>
                                    <th className='py-[10px] text-right px-6  tracking-wide font-medium text-md'>Order Amount</th>
                                </tr>

                            </thead>

                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281209</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-green-500'></div>Successful</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX123456</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Today, 8:45 PM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹1125.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281210</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-gray-500'></div>Processing</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX789012</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Tomorrow, 10:00 AM	</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹950.50</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281211</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-green-500'></div>Successful</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX345678</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Yesterday, 3:30 PM	</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹750.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281212</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-green-500'></div>Successful</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX901234</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Today, 11:20 AM	</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹2000.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281213</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-gray-500'></div>Processing</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX567890</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Tomorrow, 9:00 AM	</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹1800.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281214</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-gray-500'></div>Processing</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX098765</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Yesterday, 2:00 PM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹500.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281215</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-green-500'></div>Successful</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX456789</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Today, 10:30 AM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹3000.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281216</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-gray-500'></div>Processing</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX987654</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Tomorrow, 11:30 AM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹1200.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281217</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-gray-500'></div>Processing</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX654321</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Yesterday, 4:00 PM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹900.00</td>
                            </tbody>
                            <tbody>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md text-[#146EB4]'>#281218</td>
                                <td className=' relative py-[10px] text-left px-11 tracking-wide font-sm text-md '><div className=' absolute left-6 top-4 h-3 w-3  rounded-full bg-green-500'></div>Successful</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>TRX234567</td>
                                <td className='py-[10px] text-left px-6 tracking-wide font-sm text-md'>Today, 9:45 AM</td>
                                <td className='py-[10px] text-right px-6 tracking-wide font-sm text-md'>₹1500.00</td>
                            </tbody>
                        </table>
                    </div>
                    {/* <div className='flex-col justify-between mt-4 '>


                        <div className=' bg-gray-300 p-2.5 rounded-md'>
                            <thead className='flex justify-between'>

                                <th className=' text-left'>Order ID</th>
                                <th className=' text-left'>Status</th>
                                <th className=' text-left'>Transaction ID</th>
                                <th className=' text-left'>Refund Date</th>
                                <th className=' text-left'>Order Amount</th>
                            </thead>
                        </div>

                        <div className=''>
                            <tbody className='flex justify-between px-4 -py-[10] mb-2'>

                                <td className='text-left'>#281209</td>
                                <td className='text-left'>Successful</td>
                                <td className='text-left'>TRX123456</td>
                                <td className='text-left'>Today, 8:45 PM</td>
                                <td className='text-left'>₹1125.00</td>
                            </tbody>
                        </div>








                    </div> */}

                </div>
            </div >
        </>
    )
}

export default Transactions
