import React, { useState } from 'react'

const Todos = ({ todos, key }) => {
    // let complete = "";
    const [complete, setComplete] = useState(
        todos.map(todo => todo.completed)
    );

    const handleButton = (index) => {
        const newStatus = [...complete];
        newStatus[index] = !newStatus[index];
        setComplete(newStatus);
        todos[index].completed = newStatus[index];
    }

    return (
        <div>

            {
                todos.map((todo, index) => (
                    <div key={index}>

                        <h1>{todo.title}</h1>
                        <h2>{todo.description}</h2>
                        <button onClick={() => {
                            {
                                handleButton(index)
                            }
                        }}>{complete[index] ? "Completed" : "Mark as Complete"}</button>
                    </div>

                ))
            }
        </div>
    )
}

export default Todos