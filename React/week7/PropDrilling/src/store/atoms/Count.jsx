import React from 'react'
import { atom } from 'recoil'
// const Count = () => {
//     return (
//         <div>Count</div>
//     )
// }

const countAtom = atom({
    key: "countAtom",
    default: 0
});

export default countAtom