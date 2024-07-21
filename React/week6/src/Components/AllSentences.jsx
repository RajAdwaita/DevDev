import { React, useState } from 'react'
import sentences from './GenWords.js'

const AllSentences = () => {
    const [sentence, setSentence] = useState([])
    return (
        <>
            {
                sentences.map((sentence, index) => (

                    // console.log(sentence);
                    <div key={index}>{sentence}</div>
                ))
            }
        </>
    )
}

export default AllSentences