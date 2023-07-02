import React, { useContext } from 'react';
import { GlobalInfo } from './Parents';

export default function SubChilds() {
    const { color, getDay } = useContext(GlobalInfo);

    const day = "Thursday";

    return (
        <>
            <div className='col-md-12'>
                <h3 style={{color:color}}>Child Component</h3>
                <button className='btn btn-secondary' onClick={() => getDay(day)}>Days</button>
            </div>
        </>
    )
}
