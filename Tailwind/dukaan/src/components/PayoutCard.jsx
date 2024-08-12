import React from 'react'

const PayoutCard = ({ title, amount, countOrder, nextPayment }) => {
    return (

        <div>

            <div className='shadow-md rounded bg-[#146EB4] p-6 text-white  pb-0 hover:bg-[#0E4F82]' >
                <div>
                    <div className='text-white-500 flex'> <div className='mr-4'>{title}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>

                    </div>
                    <div className='flex  justify-between pt-3'>
                        <div className='text-white font-semibold text-3xl'> $ {amount}</div>
                        {countOrder ? <div className='flex  font-medium text-base underline text-white text-lg'> <div className=''>{countOrder} Orders </div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </div> : null}
                    </div>
                    <div className='mt-5  -mx-6' >
                        <div className='w-full'>
                            <div className='flex justify-between shadow-md rounded bg-[#0E4F82] p-3 '>
                                <div>
                                    Next Payment Date:
                                </div>
                                <div>
                                    {nextPayment != "" ? nextPayment : "TBD"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>



        </div >




    )
}

export default PayoutCard