import React, { useCallback, useMemo, useState } from 'react'

export default function UseMemoComp() {

    const [counts, setCounts] = useState(0);
    const [items, setItems] = useState(1);

    const countsInc = () => {
        console.warn('inc');
        setCounts(counts + 1);
    }

    const itemsMul = () => {
        console.warn('mul');
        setItems(items * 2);
    }

    // const isEven = () => {  // normal functionn 
    //     console.warn('war');
    //     return counts % 2 === 0;
    // }

    // const useMemoFunct = useMemo(() => {  // uesing useMemo functionn 
    //     console.warn('war');
    //     return counts % 2 === 0;
    // }, [counts]);

    const useMemoFunct = useCallback(() => {  // uesing useCallBack functionn 
        console.warn('memo/Call');
        return counts % 2 === 0;
    }, [counts])

    return (
        <>
            <div className='col-md-12'>
                <h1>Counts: {counts} <span>{useMemoFunct() ? 'Even' : 'Odd'}</span></h1>
                <h1>Items: {items}</h1>
                <button onClick={countsInc}>Count +</button>
                <button onClick={itemsMul}>Items *</button>
            </div>
        </>
    )
}
