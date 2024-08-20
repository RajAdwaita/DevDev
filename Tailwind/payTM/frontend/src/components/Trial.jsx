import React, { useEffect, useState } from 'react'
import Axios from 'axios'
const Trial = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        async function main() {
            const response = await Axios.get('http://localhost:3000/api/v1/user/allusers')
            setData(response.data.users)
            console.log(response.data.users);

        }
        main();
    }, [data])
    return (
        <>
            <h1>
                {data.map((d, index) => (

                    <div key={index}>

                        <h2 key={index}>{d._id}</h2>
                        <h2 key={index}>{d.userName}</h2>
                        <h2 key={index}>{d.firstName}</h2>
                        <h2 key={index}>{d.lastName}</h2>

                    </div>

                ))}
            </h1>




        </>
    )
}

export default Trial