import React, { useRef } from 'react'

export default function UseRefComp() {

    let inputRef = useRef(null); 

    function handleSubmit() {
        inputRef.current.value="100"
        inputRef.current.focus();
        inputRef.current.style.color="blue"
        inputRef.current.style.margin="10px"
    }

    return (
        <>
            <div>
                <h2>Hii</h2>
                <input 
                    type='text' 
                    placeholder='Enter the text'
                    ref={inputRef}
                    
                />
                <button onClick={handleSubmit}>Onclick</button>
            </div>
        </>
    )
}
