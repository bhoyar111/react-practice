import React, { useState, useEffect, createContext } from 'react'
import Childs from './Childs'

export const GlobalInfo = createContext();
export default function Parents() {
    const [color, setColor] = useState(); 
    const [days, setDays] = useState();
    const [months, setMonths] = useState();

    const getDay = (data) => {
        setDays(data)
    }

    const getMonth = (data) => {
        setMonths(data)
    }

    useEffect(() => {
        setColor('green')
    }, [])

    return (
        <>
           <GlobalInfo.Provider value={{color: color, getDay: getDay, getMonth}}>
                <div className='col-md-12'>
                    <p>Days:{days}</p>
                    <h5>Month:{months}</h5>
                    <h1 style={{color: color}}>Parent Component</h1>
                </div>
                <Childs />
           </GlobalInfo.Provider>
        </>
    )
}
