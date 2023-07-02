import React, { useState } from 'react'

export default function EvenOddFunc() {

    const [counts, setCounts] = useState(0);

    const countInc = () => {
        setCounts(counts + 1);
    }

    const isEven = () => {
        return counts % 2 === 0 
    } 
    return (
        <>
            <h1>Hello, Welcome {counts} {" "}
            <span>{isEven() ? 'Even' : 'Odd'}</span>
            </h1>
            <button onClick={countInc}>Count +</button>
        </>
    )
}
