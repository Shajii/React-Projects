import React, { Fragment } from 'react'
import spinner from './spinner.webp'

function Spinner() {
    return (
        <Fragment>
            <img src={spinner} alt="" className='spinner'/>
        </Fragment>
    )
}

export default Spinner
