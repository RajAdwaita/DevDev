// import React, { useEffect, useState } from 'react'
// import { useRecoilValue } from 'recoil'
// import { jobs, messaging, network, notifications, totalNotificationSelector } from './atoms'

// const Buttons = () => {
//     const networkCount = useRecoilValue(network)
//     const jobsCount = useRecoilValue(jobs)
//     const messagingCount = useRecoilValue(messaging)
//     const notificationsCount = useRecoilValue(notifications)
//     const totalNotificationCount = useRecoilValue(totalNotificationSelector)

//     return (
//         <>
//             <button>Home </button>
//             <button>My Network {networkCount >= 100 ? '99+' : networkCount}</button>

//             <button>Jobs {jobsCount >= 100 ? '99+' : jobsCount}</button>
//             <button>Messaging {messagingCount >= 100 ? '99+' : messagingCount} </button>
//             <button>Notifications {notificationsCount >= 100 ? '99+' : notificationsCount}</button>
//             <button >Me {totalNotificationCount}</button>
//         </>
//     )
// }

// export default Buttons