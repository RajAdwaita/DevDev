import React, { memo } from 'react'

const IncrementButton = memo(({ onClick }) => {
    console.log("IncrementButton re-rendered");
    return <button onClick={onClick}>+</button>;
});

export default IncrementButton