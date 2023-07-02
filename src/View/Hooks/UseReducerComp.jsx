import React, { useReducer } from 'react'

let initialState = 0;
const reducer = (state, action) => {
    if (action.type === "INC") {
        return state + 1;
    } else if (action.type === "DEC") {
        return state - 1;
    } else if (action.type === "MUL") {
        return state * 2;
    } else {
        return state
    }
}
export default function UseReducerComp() {

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <>
            <div>
                <h1>Counts:{state}</h1>
                <button onClick={() => dispatch({type:"INC"}) }>Count +</button>
                <button onClick={() => dispatch({type:"DEC"}) }>Counts -</button>
                <button onClick={() => dispatch({type:"MUL"}) }>Counts *</button>
            </div>
        </>
    )
}
