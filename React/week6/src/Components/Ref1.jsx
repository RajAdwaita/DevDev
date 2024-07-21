import React, { useCallback, useEffect, useRef } from 'react'

const Ref1 = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();

    }, [inputRef])
    const onHandleClick = useCallback(() => {

        inputRef.current.focus();

    })

    return (
        <>
            <input ref={inputRef} type="text" placeholder='Enter Text' />
            <button onClick={onHandleClick}>FOCUS</button>
        </>
    )
}

export default Ref1