import { React, useState, useMemo } from 'react'
import sentences from './GenWords.js'

const Input = () => {
    const [searchString, setSearchString] = useState("")
    // const [matchedSentences, setMatchedSentences] = useState([])

    const matchedSentences = useMemo(() => {
        // var arr = []
        // for (var i = 0; i < sentences.length; i++) {
        //     if (sentences[i].includes(searchString)) {
        //         arr.push(sentences[i])
        //     }
        // }
        // return arr;

        return sentences.filter(x => x.includes(searchString))
    }, [searchString])
    return (
        <>
            <div>
                <input type="text" placeholder='enter the word/s' onChange={(e) => {
                    const val = e.target.value;
                    setSearchString(val);

                }} />
            </div>
            {
                matchedSentences.map((sentence, index) => (

                    // console.log(sentence);
                    <div key={index}>{sentence}</div>
                ))
            }
        </>
    )
}

export default Input