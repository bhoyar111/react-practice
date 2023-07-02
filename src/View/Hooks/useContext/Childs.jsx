import React, { useContext } from 'react'
import SubChils from './SubChilds';
import { GlobalInfo } from './Parents';

export default function Childs() {
    const { color, getMonth } = useContext(GlobalInfo);
    const month = 'November'
    return (
        <>
            <div className='col-md-12'>
                <h2 style={{color: color}}>Child Componet</h2>
                <button className='btn btn-secondary' onClick={() => getMonth(month)}>Month</button>
            </div>
            <SubChils />
        </>
    )
}
