import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Send from '../pages/Send'

const Users = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")
    const navigate = useNavigate();

    // useEffect(() => {
    //     async function searchUser() {
    //         try {
    //             const response = await Axios.get(`http://localhost:3000/api/v1/user/${search}`)
    //             setUsers(response.data)
    //             console.log(response.data);


    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }


    //     searchUser()
    // }, [search])

    useEffect(() => {
        try {
            const token = localStorage.getItem('token')
            if (token) {
                navigate('/dashboard')
            }
            else {
                navigate('/signup')
            }
        }

        catch (error) {
            console.log(error)

        }

        async function getUsers() {
            try {
                const token = localStorage.getItem('token')
                if (token) {
                    navigate('/dashboard')
                }
                else {
                    navigate('/signup')
                }
                const response = await Axios.get('http://localhost:3000/api/v1/user/allusers',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                // console.log(response.data.users);

                setUsers(response.data.users)

                if (search != "") {
                    const responseSearch = await Axios.get(`http://localhost:3000/api/v1/user/${search}`)
                    // console.log(responseSearch)
                    if (responseSearch.data && Array.isArray(responseSearch.data)) {

                        setUsers(responseSearch.data || response.data.users)
                    }
                    // else if (responseSearch.data  && response)
                }
            }

            catch (error) {
                console.error('Error fetching users:', error);
                if (error.response && error.response.status === 403) {
                    console.error('Unauthorized access - Token might be invalid or expired');
                }
            }
        }
        getUsers();

    }, [navigate, search])

    const handleClick = (user) => {
        console.log(user);

        // navigate('/send')
        // navigate('/send', { state: { user } })
        navigate('/send?id=' + user._id + "&name=" + user.firstName)
    }


    return (
        <>
            <div className='flex flex-col mt-5'>
                <div className='font-semibold text-xl'>Users</div>
                <div className='mt-2'><input type="text" className='p-3 rounded-lg border border-black-2 w-full max-w-6xl shadow-md' onChange={(e) => {
                    const val = e.target.value;
                    setSearch(val)
                }} /></div>



                {
                    users.map((user) => (
                        <div key={user._id} className='flex justify-between p-5 items-center' >

                            <div className='flex gap-5 items-center justify-center'>
                                <div className='bg-black text-white h-10 w-10 text-xl font-semibold rounded-full flex items-center justify-center'>{user.firstName[0]}</div>
                                <div>{user.firstName} {user.lastName}</div>
                            </div>
                            <div className='mr-28'><button className='p-4 bg-black text-white rounded-xl' type='submit' onClick={() => handleClick(user)}>Send Money</button></div>
                        </div>
                    ))


                }









                {/* <div className='flex justify-between p-5 items-center' >
                    <div className='flex gap-5 items-center justify-center'>
                        <div className='bg-black text-white h-10 w-10 text-xl font-semibold rounded-full flex items-center justify-center'>A</div>
                        <div>Adwaita Raj Modak</div>
                    </div>
                    <div className='mr-28'><button className='p-4 bg-black text-white rounded-xl'>Send Money</button></div>
                </div> */}
                {/* <div className='flex justify-between p-5 items-center' >
                    <div className='flex gap-5 items-center justify-center'>
                        <div className='bg-black text-white h-10 w-10 text-xl font-semibold rounded-full flex items-center justify-center'>A</div>
                        <div>Adwaita Raj Modak</div>
                    </div>
                    <div className='mr-28'><button className='p-4 bg-black text-white rounded-xl'>Send Money</button></div>
                </div> */}
            </div>
        </>
    )
}

export default Users