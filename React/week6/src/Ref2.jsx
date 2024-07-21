import React, { useState, useRef } from 'react'

const Ref2 = () => {
    const [count, setCount] = useState(0)
    const rerender = useRef(0);

    const handleClick = () => {
        setCount(count + 1);

    }

    rerender.current = rerender.current + 1
    return (
        <>
            <h2>this Component has been re rendered {rerender.current} times</h2>
            <button
                onClick={handleClick}>Click</button>
        </>
    )
}

export default Ref2