import React, { Fragment } from 'react'


function Alert({input}) { 
    return (
        (input !== null) &&  (
            <Fragment>
                <div className={input.type}>
                    <i className='fas fa-info'></i>{input.msg}
                </div>
                <div>
                    <button style={alertBtn}>
                        <i className="fas fa-times fa-2x alert-icon"></i>
                    </button>
                </div>
            </Fragment>
        )
    )
}

const alertBtn = {
    width: '40px',
    height: '40px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '90px',
    right: '10px'  
}

export default Alert


