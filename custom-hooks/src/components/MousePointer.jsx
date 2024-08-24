import React, { useEffect, useState } from 'react'

const useMousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);


    }, [])

    return position;;
}

const MousePointer = () => {

    const mousePointer = useMousePointer();
    return (
        <>
            <div>
                {mousePointer.x} {mousePointer.y}
            </div>
        </>
    )
}

export default MousePointer