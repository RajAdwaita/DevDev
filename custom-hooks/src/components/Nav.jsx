// import React, { useState, useEffect } from 'react'
// import Axios from 'axios'

// const useTodos = (n) => {
//     const [todos, setTodos] = useState([])
//     const [loading, setLoading] = useState(true)
//     useEffect(() => {

//         async function getTodos() {
//             try {
//                 const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
//                 setTodos(response.data)
//                 setLoading(false)
//             }
//             catch (error) {
//                 console.log(error);
//             }
//         }
//         setInterval(() => {

//             getTodos();
//         }, n * 1000)



//         getTodos();



//         // return () => clearInterval(intervalId);


//     }, []);

//     return { todos, loading };

// }

// const Nav = () => {
//     const { todos, loading } = useTodos(3);
//     if (loading) {
//         return (
//             <div>Loading...</div>
//         )
//     }
//     return (
//         <div>
//             {
//                 todos.map((todo) => (

//                     <div key={todo.id}>
//                         <div>{todo.title}</div>
//                         {/* <div></div> */}
//                         {/* <div></div> */}
//                     </div>

//                 ))
//             }

//         </div>
//     )
// }

// export default Nav

import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const useTodos = (n) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTodos = async () => {
            try {
                const response = await Axios.get('https://jsonplaceholder.typicode.com/todos');
                setTodos(response.data);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        // Fetch the data initially
        getTodos();

        // Set up polling
        const intervalId = setInterval(() => {
            setLoading(true);
            getTodos();
        }, n * 1000); 

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [n]); // Dependency array now includes 'n'

    return { todos, loading };
};

const Nav = () => {
    const pollInterval = 6; // Poll every 3 seconds
    const { todos, loading } = useTodos(pollInterval);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <div>{todo.title}</div>
                </div>
            ))}
        </div>
    );
};

export default Nav;
