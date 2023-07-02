import React from 'react';
import SubChild from './SubChild';

export default function Child(props) {

    return (
        <>
            <div className='col-md-12'>
                <h1>Child Component{props.message}</h1>
                <SubChild 
                    message={props.message}
                />
            </div>
        </>
    )
}
