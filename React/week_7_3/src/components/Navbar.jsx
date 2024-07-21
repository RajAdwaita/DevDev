import React, { useEffect, useMemo, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import axios from 'axios';

const Navbar = () => {
    const [value, setValue] = useState([])
    const [total, setTotal] = useState(0)
    const [networkCount, setNetworkCount] = useRecoilState(notifications)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)
    // const networkCount = useRecoilValue(network)
    // const jobsCount = useRecoilValue(jobs)
    // const messagingCount = useRecoilValue(messaging)
    // const notificationsCount = useRecoilValue(notifications)
    // const totalNotificationCount = useRecoilValue(totalNotificationSelector)

    // useEffect(() => {
    //     axios.get('https://sum-server.100xdevs.com/notifications')
    //         // .then(res => res.json())
    //         .then(data => {
    //             // setValue(data.data)
    //             setNetworkCount(data.data)
    //         })
    //         .catch(err => console.log(err))

    // }, [])

    const tot = useMemo(() => {
        return value.network + value.messaging + value.jobs + value.notifications;
        // return s
    }, [value])

    return (
        <>
            <button>Home </button>
            {/* <button>My Network {networkCount >= 100 ? '99+' : networkCount}</button> */}
            <button>My Network {networkCount.network}</button>
            <button>Jobs {networkCount.jobs}</button>
            <button>Messaging {networkCount.messaging} </button>
            <button>Notifications {networkCount.notifications}</button>
            <button >Me {totalNotificationCount}</button>

            {/* <button>Jobs {jobsCount >= 100 ? '99+' : jobsCount}</button>
            <button>Messaging {messagingCount >= 100 ? '99+' : messagingCount} </button>
            <button>Notifications {notificationsCount >= 100 ? '99+' : notificationsCount}</button>
            <button >Me {totalNotificationCount}</button> */}
        </>
    )
}

export default Navbar