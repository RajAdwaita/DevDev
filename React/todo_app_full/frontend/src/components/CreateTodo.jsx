import React, { useState } from 'react'
import '../css/CreateTodo.css'
import Axios from "axios";
const CreateTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    return (
        <div>
            <input id="title" className="title" type="text" placeholder='title' value={title} onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }} ></input><br />
            <input id="desc" className='desc' type="text" placeholder='description' value={desc} onChange={(e) => {
                const value = e.target.value;
                setDesc(value);
            }} ></input><br />

            <button className='btn' onClick={(e) => {
                e.preventDefault();
                Axios.post("http://localhost:3000/todo", {
                    title: title,
                    description: desc
                })
                    .then(async (res) => {
                        if (!res.ok) {
                            throw new Error("Network response was not ok");
                        }
                        const json = await res.json();
                        addTodo(json);
                        console.log(json);
                        setTitle("");
                        setDesc("")
                        // console.log(json);
                        alert("TODO ADDED");
                    })
                    .catch(err => console.log(err))
                //     fetch("http://localhost:3000/todo", {
                //         method: "POST",
                //         body: JSON.stringify({
                //             title: title,
                //             desc: desc,
                //         }),
                //         headers: {
                //             "Content-Type": "application/json",
                //         }
                //     })
                //         .then(async (res) => {
                //             if (!res.ok) {
                //                 throw new Error("Network response was not ok");
                //             }
                //             const json = await res.json();
                //             addTodo(json);
                //             console.log(json);
                //             setTitle("");
                //             setDesc("")
                //             // console.log(json);
                //             alert("TODO ADDED");
                //         })
                //         .catch(err => console.log(err))
            }}
            >Add TODO</button>

        </div >
    )
}

export default CreateTodo    