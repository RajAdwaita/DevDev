import { React, useEffect, useState } from 'react'
import axios from 'axios'
const useTodos = (val) => {
    // const [id, setId] = suseState(1)
    const [todo, setTodo] = useState([])


    useEffect(() => {
        const res = axios.get("https://sum-server.100xdevs.com/todo?id=" + val)
            .then((res) => {
                setTodo(res.data.todo);

            })

    }, [val])
    return todo;
}

export default useTodos