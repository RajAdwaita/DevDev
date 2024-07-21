import React from 'react'

const Todos = ({ todo, key }) => {
    if (!todo) {
        return null;
    }
    return (
        <div>

            {/* {todos.map((todo, key) => (
                <div key={key}>

                    <h2>{todo.title}</h2>
                    <h2>{todo.description}</h2>
                    <h2>{todo.completed}</h2>
                </div>

            ))} */}

            <div key={key}>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <h1>{todo.completed}</h1>

            </div>

        </div>
    )
}

export default Todos