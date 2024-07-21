import React, { useState } from 'react'
import TodoRender from './TodoRender'
let counter = 4;
const Todo = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'GATE',
            desc: 'Exam for Higher Studies'
        },
        {
            id: 2,
            title: 'GYM',
            desc: 'for fitness and well being'
        },
        {
            id: 3,
            title: 'Football',
            desc: 'this is life'
        }
    ])
    return (
        <>
            <button onClick={() => {
                setTodos([...todos,
                {
                    id: counter++,
                    title: 'MOBILE GAMES',
                    desc: 'for entertainment '
                }]
                )
            }}>ADD TODO PLZ...</button >
            {
                todos.map((todo) => (

                    <TodoRender key={todo.id} id={todo.id} title={todo.title} desc={todo.desc} />
                ))
            }

        </>

    )
}

export default Todo 