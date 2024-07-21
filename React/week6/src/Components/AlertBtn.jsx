/* eslint-disable react/display-name */
import React, { memo } from 'react'

const AlertBtn = memo(({ text }) => {
    return (
        <div>
            <button onClick={() => {
                alert(text)
            }}>Click</button>

        </div>
    )
})

export default AlertBtn