import React, { useState } from 'react'

export default function InputDisplay() {

    const [inputText, setInputText] = useState('');
    const [inputTextUpdate, setInputTextUpdate] = useState('');

    const handleInput = (e) => {
        setInputText(e.target.value);
    }

    function handleSubmit() {
        setInputTextUpdate(inputText)
    }

    return (
        <>
            <h1>Cuurent Value {inputText}</h1>
            <h1>added Value {inputTextUpdate}</h1>
            <div>
                <input 
                    type='text' 
                    placeholder='Enter input value'
                    value={inputText}
                    onChange={handleInput}
                />
            </div>
            <button onClick={handleSubmit}>Adding</button>
        </>
    )
}
