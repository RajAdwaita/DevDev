/* eslint-disable react/prop-types */
import React from 'react'
import '../css/CardWrapper.css'

const CardWrapper = ({ children }) => {
    return (
        <div >
            <div id='card' className='card'
                style={{ margin: '2px solid white' }}>
                {children}
            </div>

        </div>
    )
}

export default CardWrapper