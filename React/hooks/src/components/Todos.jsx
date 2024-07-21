import React from 'react'

const Todos = ({ todo }) => {
    if (!todo) {
        return null;
    }
    return (
        <div>
            {/* {
                todos.map((todo, index) => (
                    <div key={index} style={todo.completed ? { color: 'green' } : { color: 'red' }}>


                        <h1>{todo.title}</h1>
                        <h1>{todo.desc}</h1>
                    </div>
                ))
            } */}

            <div style={todo.completed ? { color: 'green' } : { color: 'red' }}>


                <h1>{todo.title}</h1>
                <h1>{todo.desc}</h1>
            </div>




        </div>
    )
}

export default Todos