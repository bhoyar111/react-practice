import React, { useState } from 'react'

export default function InputAdding() {

    const [sum, setSum] = useState(0);
    const [addInputs, setAddInputs] = useState({
        num1: '',
        num2: ''
    });
   
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setAddInputs({
            ...addInputs,
            [name]:value
        })
    }
     
    const handleSubmit = () => {
        setSum(parseInt(addInputs.num1) + parseInt(addInputs.num2))
    }

    return (
        <>
            <h1>Adding to Input Fields</h1>
            <div>
                <label>First Value:</label>
                <input 
                    className='m-2'
                    type='text'
                    name='num1'
                    value={addInputs.num1}
                    onChange={handleInput}
                /> 
                <br></br>
                <label>Second Value:</label>
                <input 
                    className='m-2' 
                    type='text'
                    name='num2'
                    value={addInputs.num2}
                    onChange={handleInput}
                />
                <br></br>
                <label>Total Sum:</label>
                <input 
                    type='text'
                    value={sum}
                    readOnly
                />
                <br></br>
                <input 
                    type='submit'
                    value="Submit"
                    onClick={handleSubmit}
                />
            </div>
        </>
    )
}
