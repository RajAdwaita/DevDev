import React, { useEffect, useState } from 'react'


const useDebounce = (inputValue, time) => {
    const [dval, setDval] = useState("")
    const setValue = (text) => {
        setDval(text);

    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setValue(inputValue)
        }, time)


        return () => clearTimeout(timeoutId)


    }, [inputValue])
    return dval;

}

const Debounce = () => {
    const [text, setText] = useState("")
    const debouncedValue = useDebounce(text, 500)
    return (
        <>
            <div>
                <input type="text" onChange={(e) => {
                    setText(e.target.value)
                }} />
            </div>
            <div>Results : {debouncedValue}</div>
        </>
    )
}

export default Debounce