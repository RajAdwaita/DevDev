import React, { useState } from 'react'
import AlertBtn from './AlertBtn';



const InputBox = () => {
    const [inputText, setInputText] = useState("")
    return (
        <>
            <input type="text" placeholder='enter text'
                onChange={(e) => {
                    const str = e.target.value;
                    setInputText(str)

                }} />

            <AlertBtn text={inputText} />

        </>
    )
}

export default InputBox