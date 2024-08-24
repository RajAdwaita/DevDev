import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
    const [online, setOnline] = useState(window.navigator.onLine)

    useEffect(() => {

        const isOnline = window.navigator.onLine;
        setOnline(isOnline)


    }, [online])

    console.log(online);

    return online;



}

const OnlineHooks = () => {

    const check = useIsOnline()
    if (check) {
        return (
            <div>ONLINE</div>
        )
    }
    else {
        return (
            <div>OFFLINE
                {
                    alert('Check your Connection')
                }
            </div>
        )
    }
    // return (
    //     <>
    //         <div>OFFLINE</div></>
    // )
}

export default OnlineHooks