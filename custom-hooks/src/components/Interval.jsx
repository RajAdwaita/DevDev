import React, { useEffect, useState } from 'react'


const useInterval = () => {

    const [count, setCount] = useState(0);
    useEffect(() => {

        const intervalId = setInterval(() => {
            setCount(c => c + 1)
        }, 1000)

        return () => { clearInterval(intervalId) }

    }, [])

    return count;

}

const Interval = () => {

    const time = useInterval();
    return (
        <>
            <div>
                TIME IS: {time}

            </div>
        </>
    )
}

export default Interval