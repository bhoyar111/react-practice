import React from 'react'

export default function SubChild(props) {
    return (
        <>
            <div className='col-md-12'>
                <h1>SubChild Component: {props.message} </h1>
            </div>
        </>
    )
}
