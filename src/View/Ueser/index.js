import React from 'react';
import List from './List';
import Add from './Add';
import HeaderComp from '../Header/HeaderComp';

export default function UserList() {

    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                    <Add />
                    <List /> 
                </div>
            </div>
        </>
    )
}
