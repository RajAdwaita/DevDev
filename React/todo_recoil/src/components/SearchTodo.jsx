import React, { useState, useEffect } from 'react'
import ShowTodos from './ShowTodos';

const SearchTodo = ({ todos, index }) => {
    const [text, setText] = useState("")
    const [display, setDisplay] = useState(todos)

    useEffect(() => {

        const filtered = todos.filter((todo) =>

            todo.title.includes(text) || todo.desc.includes(text)
        );
        setDisplay(filtered)


    }, [text, todos])


    return ( 
        <>

            <div>
                <input type="text" placeholder='enter keyword' onChange={(e) => {
                    const temp = e.target.value;
                    setText(temp);

                    // {
                    //     todos.filter((todo) => {

                    //     })
                    // }
                }} />

                <ShowTodos display={display} key={index} />
            </div>

        </ >
    )
}

export default SearchTodo