import React from 'react';
import HeaderComp from '../Header/HeaderComp';
import GeneralHooks from './useContext/Parents';

export default function HooksComp() {
    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                   <GeneralHooks />
                </div>
            </div>
            
        </>
    )
}
