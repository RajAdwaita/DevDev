import React, { useState, useEffect } from 'react'
import Todos from './Todos.jsx'

const Hooks = () => {
    const [count, setCount] = useState(0)

    const [id, setId] = useState(0)
    const [todos, setTodos] = useState([])
    useEffect(() => {

        // fetch('https://sum-server.100xdevs.com/todos')
        //     .then(res => res.json())
        //     .then(async data => {
        //         await setTodos(data.todos);
        //     })
        //     .catch(error => {
        //         console.log("ERROR FETCHING TODFOS", error);
        //     })

        const fetchTodos = async () => {


            try {
                const res = await fetch('https://sum-server.100xdevs.com/todos');
                const data = res.json();
                console.log("DATA: ", data);
                setTodos(data.todos);
            }
            catch (err) {
                console.log("ERROR FETCHING TODFOS", err);

            }
        }
        // setTimeout(() => {
        //     fetchTodos();

        // }, 3000);
        fetchTodos();
    }, [])

    const handleSubmit = async (id) => {
        const str = `https://sum-server.100xdevs.com/todo?id=${id}`;

        try {
            const res = await fetch(str);
            const data = await res.json();
            console.log("DATA: ", data);
            setTodos(data.todo);
        }
        catch (err) {
            console.log("ERROR FETCHING TODFOS", err);

        }
    }
    return (
        <div>
            <input type='number' placeholder='Enter Todo Id' onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                console.log(val);
                setId(val);

            }} />

            <button onClick={async () => {
                setCount(id)

                handleSubmit(id)


            }}>Get Todo</button>
            {
                // selectedTodo &&

                < Todos todo={todos} />
            }
            <div>

                <button onClick={async () => {
                    // let v = id
                    if ((count + 1) > 5) {
                        setCount(1)
                    }
                    else {

                        setCount(count + 1)
                    }

                    handleSubmit(count)



                }}>NEXT TODO</button>
            </div>


        </div >
    )
}

export default Hooks