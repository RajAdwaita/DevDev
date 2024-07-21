import React from 'react'

const TodoRender = ({ id, title, desc }) => {
    return (
        <>
            <div>

                <div>
                    {id}
                </div>
                <div>
                    {title}

                </div>
                <div>
                    {desc}

                </div>
                <br />


            </div>


        </>
    )
}

export default TodoRender