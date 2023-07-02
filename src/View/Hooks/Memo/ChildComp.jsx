import React, { memo, useState } from 'react';

 function ChildComp(props) {
    const { inputName, getData } = props;
    const [fName, setFname] = useState("");
    console.log(inputName, 'cilsd');

    const handleChange = (e) => {
        setFname(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(fName)
    }

    return (
       <>
            <div>
                {inputName.map((name, ind) => {
                    return <tr key={ind}>
                        <td>{name}</td>
                    </tr>
                })
                }
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={fName}
                        onChange={handleChange}
                    />
                    <input type='submit'/>
                </form>
            </div>
        </>
    )
}

export default memo(ChildComp);