import React, { memo } from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
const DecrementButton = memo(({ onClick }) => {
    console.log("Decrement Button rendered");
    return <button onClick={onClick}>-</button>
})

export default DecrementButton