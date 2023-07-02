import React, { useEffect, useState } from 'react'

export default function Counts() {

    const [counts, setCounts] = useState();

    const countsInc = () => {
        setCounts(counts + 1);
    }

    const countsDec = () => {
        setCounts(counts - 1)
    }

    useEffect(() => {
        setCounts(0)
    }, [])

    return (
        <>
            <div className='col-md-12'>
                <h1>Counts: {counts}</h1>
                <button onClick={countsInc}>Count +</button>
                <button onClick={countsDec}>Count -</button>
            </div>
        </>
    )
}
