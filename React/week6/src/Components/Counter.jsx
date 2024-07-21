import { React, useState, useCallback } from 'react'
import IncrementButton from './IncrementButton'
import DecrementButton from './DecrementButton'

const Counter = () => {
    const [count, setCount] = useState(0)

    const onClickHandleInc = useCallback(() => {
        setCount((curr) => {
            return curr + 1
        })
    }, [])
    const onClickHandleDec = useCallback(() => {
        setCount((curr) => {
            if (curr < 1) {
                return 0;
            }
            else
                return curr - 1
        })
    }, [])
    return (
        <>
            <div>
                Counter: {count}
            </div>
            <div>
                {/* <button onClick={onClickHandleInc}>+</button> */}
                {/* <IncrementButton onClick={onClickHandleInc} /> */}
                <IncrementButton onClick={onClickHandleInc} />
                <DecrementButton onClick={onClickHandleDec} />
                {/* <button onClick={onClickHandleDec}> -</button> */}

            </div >




        </>
    )
}

export default Counter