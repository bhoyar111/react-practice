import React from 'react'

export default function DestructuringComp() {

    // Destructuring for Arrays
    // const arr = [1, 2, "Akash Bhoyar", 25];
    // const arr = [1, 2, "Akash Bhoyar", 25, ['India', 'Maharshtra']];  // Nested array
    // const [first, second, name, age, country, state] = arr;
    // const [first, ...agrus] = arr;  // by using rest operator
    // console.log(first);     // Output 1
    // console.log(second);    // Output 2
    // console.log(name);      // Output Akash Bhoyar
    // console.log(age)        // Output 25
    // console.log(country)    // Output 25
    // console.log(state)      // Output 25
    // console.log(agrus);     // [2, "Akash Bhoyar", 25 ]


    // const users = ([name, age, city]) => {  
    //     console.log(name);
    //     console.log(age);
    //     console.log(city);
    // }
    // users(["Akash Bhoyar", 25, 'Nagpur']);


    // const users = () => {  
    //     return ["Anay Bhoyar", 29, 'Bhandara']
    // }
    // const [name, age, city] = users();
    // console.log(name);
    // console.log(age);
    // console.log(city);
  

// Destructuring for Object

    // const classDetails = {
    //     strength: 78,
    //     benches: 39,
    //     blackBoard:1
    // }
    // const { strength:classStrength, benches:classBenches,blackBoard:classBlackBoard } = classDetails;
    // console.log(classStrength);  // Outputs 78
    // console.log(classBenches);   // Outputs 39
    // console.log(classBlackBoard); // Outputs 1

    // let obj1 = {
    //     name:"Ram",
    //     address: "NGP",
    //     age: 21,
    // }

    // const ak = { ...obj1, name:'AkashBhoyar' }
    // console.log(ak);
    
    return (
        <>
            <h1>ArrayObject</h1>
        </>
    )
}
