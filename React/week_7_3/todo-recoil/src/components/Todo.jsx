/* eslint-disable no-unused-vars */
import React from 'react'
import todos from './todos'
import TodoList from './TodoList'
const Todo = () => {
    return (
        <>
            <TodoList id={1} />
            <TodoList id={2} />
            <TodoList id={3} />
            <TodoList id={4} />
        </>
    )
}

export default Todo