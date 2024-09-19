import { getServerSession } from 'next-auth'
import React from 'react'

// type Props = {}

const page = async () => {
    const session = await getServerSession();
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default page