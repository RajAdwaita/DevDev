import React from 'react'

const ShowTodos = ({ display, key }) => {
    return (
        <>
            {
                display.map((todo, index) => (

                    <div key={index}>

                        <h2>{todo.title}</h2>
                        <h2>{todo.desc}</h2>

                    </div>


                ))
            }
        </>
    )
}

export default ShowTodos