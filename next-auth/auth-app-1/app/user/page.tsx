import { getServerSession } from 'next-auth'
import React from 'react'
import { NEXT_AUTH } from '../lib/auth';

// type Props = {}

const page = async () => {
    const session = await getServerSession(NEXT_AUTH);
    return (
        <div>
            {JSON.stringify(session)}
        </div>
    )
}

export default page