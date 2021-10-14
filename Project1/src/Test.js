import React from 'react'

const Test = (props) => {
    return (
        <div>
            {props.name}
            {props.children}
        </div>
    )
}

export default Test
