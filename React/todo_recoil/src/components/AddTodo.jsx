import React from 'react'
import { useState, useEffect } from 'react'
import ShowTodos from './ShowTodos'
import SearchTodo from './SearchTodo'



const AddTodo = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [count, setCount] = useState(0)

    // useEffect(() => {

    // }, [count])





    return (
        <>
            <div>

                <input type="text" placeholder='title' onChange={(e) => {

                    const t = e.target.value;
                    setTitle(t)

                }} />
            </div>

            <div>
                <input type="text" placeholder='description' onChange={(e) => {
                    const d = e.target.value;
                    setDesc(d);

                }} />

            </div>

            <button onClick={() => {
                // setCount(count => count + 1)
                setTodos([...todos, {
                    title: title,
                    desc: desc,
                }])
            }}>ADD TODO</button>
            <SearchTodo todos={todos} />
            {/* <ShowTodos todos={todos} /> */}


        </>
    )
}

export default AddTodo