import React from 'react';
import HeaderComp from '../Header/HeaderComp';
import AllOtherComp from './ADemo';

export default function AllGeneralComp() {
    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                    <div className='com-md-12'>
                        <AllOtherComp />
                    </div>
                </div>
            </div>
        </>
    )
}
