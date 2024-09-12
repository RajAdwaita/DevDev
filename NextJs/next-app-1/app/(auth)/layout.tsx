import React from 'react'


const layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <>

            <div className='p-3 bg-yellow-300 w-screen border border-red-400 border-2 text-green-900 font-semibold flex justify-center items-center'>
                <div className='w-screen animate-slide text-lg font-bold'>
                    Flat 20% OFF

                </div>
            </div>

            {children}




        </>
    )
}

export default layout