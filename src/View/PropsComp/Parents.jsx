import React from 'react';
import HeaderComp from '../Header/HeaderComp';
import Child from './Child'

export default function Parents() {
    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                <h1>Parent Component</h1>
                   <Child />
                </div>
            </div>
        </>
    )
}
