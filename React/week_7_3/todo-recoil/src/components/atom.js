import { atomFamily, selectorFamily } from "recoil";
import todos from './todos'
import axios from 'axios'
import { useEffect } from "react";
export const todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    // default: id => {
    //     return (todos.find(x => x.id === id))
    // }
    default: selectorFamily({
        key: "todoAtomSelector",
        get: (id) => async ({ get }) => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
            return res.data.todo;
        }
    })
});

