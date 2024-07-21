import { React, useState, useMemo } from 'react'

const Factorial = () => {
    const [num, setNum] = useState(0);
    // let p = 0;


    const fact = useMemo(() => {

        let p = 1;
        for (let i = 1; i <= num; i++) {
            p = p * i;
        }

        return p;



    }, [num])

    // const fact = useMemo(() => {

    //     let p = 1;
    //     for (let i = 1; i <= num; i++) {
    //         p = p * i;
    //     }

    //     return p;



    // }, [num])

    return (
        <div>
            <input type="number" placeholder='Enter a number' onChange={(e) => {
                const val = e.target.value;
                setNum(val);
            }} />
            <div>
                <h2>The factorial is {fact} </h2>
            </div>
        </div>
    )
}

export default Factorial