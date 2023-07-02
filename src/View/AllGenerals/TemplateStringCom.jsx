import React from 'react'

export default function TemplateStringCom() {

    let firstName = "Akash";
    let lastName = "Bhoyar";

    // const ak = `Hello have a nice day ${firstName} ${lastName}`

    const fullName = (firstName, lastName) => {
        return `Hello Welcome ${firstName} ${lastName}`
    }
    const ak = fullName(firstName, lastName);
    
    console.log(ak);

    return (
        <div>
            <h1>TemplateStringCom</h1>
        </div>
    )
}
