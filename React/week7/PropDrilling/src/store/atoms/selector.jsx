import React from 'react'
import countAtom from './Count'
import { selector } from 'recoil'
const evenSelector = selector({
    key: 'evenSelector',
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2;
    }
})

export default evenSelector