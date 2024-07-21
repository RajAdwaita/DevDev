import { atom, selector } from "recoil"
import axios from 'axios'
// export const network = atom({
//     key: "networkAtom",
//     default: 324,
// });

// export const jobs = atom({
//     key: "jobsAtom",
//     default: 20,
// });

// export const messaging = atom({
//     key: "messagingAtom",
//     default: 30,
// });

// export const notifications = atom({
//     key: "notificationsAtom",
//     default: 55
// });

export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () => {
            const res = await axios.get('https://sum-server.100xdevs.com/notifications')
            return res.data

        }
    })
});




export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({ get }) => {
        // const networkAtomCount = get(network)
        // const jobsAtomCount = get(jobs)
        // const messagingAtomCount = get(messaging)
        // const notificationsAtomCount = get(notifications)
        // const networkAtomCount = get(network)
        // return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount
        const allNotifications = get(notifications)

        return allNotifications.network + allNotifications.jobs + allNotifications.messaging + allNotifications.notifications

    }
})