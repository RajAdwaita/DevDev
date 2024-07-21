import React, { useEffect } from 'react'
import { todoAtomFamily } from './atom'
import { useRecoilState, useRecoilStateLoadable, useRecoilValue } from 'recoil'
import todos from './todos';

const TodoList = ({ id }) => {
    // const todo = useRecoilValue(todoAtomFamily(id));
    // const [todo, setTodo] = useRecoilState(todoAtomFamily(id));
    const [todo, setTodo] = useRecoilStateLoadable(todoAtomFamily(id));
    if (todo.state === 'loading') {
        return (
            <div>
                loading...
            </div>
        )
    }
    else {

        return (
            <>

                <div>
                    <h2>TITLE: {todo.contents.title}</h2>
                    <h2>DESCRIPTION: {todo.contents.description}</h2>
                    <h2>COMPLETED: {todo.contents.completed ? "YES" : "NO"}</h2>
                    <br />
                </div>
            </>
        )
    }

}

export default TodoList