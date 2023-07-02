import React, { useState } from 'react';
import ChildComp from './ChildComp';



export default function ParentCom() {

    const [counts, setCounts] = useState(0);
    const [inputName, setInputName] = useState(["Harish Mod", "Akash Mod"]);

    const countsInc = () => {
        console.warn("counts");
        setCounts(counts + 1);
    }

    const getData = (data) => {
        console.log("Comming from Api:", data);
    }

    return (
       <>
            <div className='col-md-12'>
                <h1>Counts:{counts}</h1>
                <button onClick={countsInc}>Counts +</button>
            </div>
            <ChildComp 
                inputName={inputName}
                getData={getData}
            />
       </>
    )
}