import React, { useEffect, useState } from 'react'
import Header from './Header'

const HeaderWithButton = () => {

    const [header, setHeader] = useState("HOWRAH")

    useEffect(() => {
        setHeader("HOWRAH")
    }, [])
    return (
        <div>
            <Header header={header} />
            <button onClick={(e) => {
                console.log(e.target);
                header === "HOWRAH" ? setHeader("KOLKATA") : setHeader("HOWRAH")
            }}>SWAP</button>
        </div>
    )
}

export default HeaderWithButton