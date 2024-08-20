import React, { useState } from 'react'
import Axios from 'axios'
const CreateUser = () => {
    const [userName, setUserName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.post('http://localhost:3000/api/v1/user/signup',
            {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                password: password
            })

    }


    return (
        <>

            <div>
                <div><h2>Create User</h2></div>
                <div>
                    <form action="" method="post" onSubmit={handleSubmit} >

                        <p>UserName</p>
                        <input type="text" placeholder='username' onChange={(e) => {
                            setUserName(e.target.value);

                        }} />
                        <p>FirstName</p>
                        <input type="text" placeholder='FirstName' onChange={(e) => {
                            setFirstName(e.target.value);

                        }} />
                        <p>LastName</p>
                        <input type="text" placeholder='LastName' onChange={(e) => {
                            setLastName(e.target.value);

                        }} />
                        <p>Password</p>
                        <input type="password" placeholder='Password' onChange={(e) => {
                            setPassword(e.target.value);

                        }} />

                        <button type='submit'>Submit</button>




                    </form>
                </div>
            </div>




        </>
    )
}

export default CreateUser