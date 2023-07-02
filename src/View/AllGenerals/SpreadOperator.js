import React from 'react'

export default function SpreadOperator() {


    /* arguments function call for multiple value add or multiply*/

    // function sum() {
    //     console.log(arguments);
    //     let sum = 0;
    //     for(let i in arguments) {
    //         sum += arguments[i]
    //     }
    //     console.log(sum);
    // }
    // sum(5, 2, 3);
    // sum(2, 4, 5, 6);

    //  function sum(name, ...rests) {
    //     let sum = 0;
    //     for(let i in rests) {
    //         sum += rests[i]
    //     }
    //     console.log(sum);
    //     console.log(name);
    // }
    // sum("akash", 5, 2, 3 );
    // sum('Bhoyar', 2, 4, 5, 6);


    // const sum = (name, ...rests) => {  // by using arrow function rest operator
    //     let sum = 0;
    //     for (let i in rests) {
    //         sum += rests[i];
    //     }
    //     console.log(sum);
    //     console.log(name);
    // }
    // sum('akash bhoyar', 10, 20, 30);
    // sum('pratik selokar', 10, 20, 30, 40);
        
        
        
    // spread operation array//
    // const ak = [1, 2, 3];
    // ak.push(5); // push new value
    // console.log(ak);


    // const ak = [1, 2, 3];
    // const bk = [4, 5, 6];
    // // const akdkjdbk = [...ak, ...bk]; // concat for 2 arrays
    // const akdkjdbk = [10, ...ak, ...bk, 20]; // concat for 2 arrays with other 2 value
    // console.log(akdkjdbk); 


    // let arr1 = [10, 20, 30];
    // let arr2 = [100, 200, 300];
    // const sum = (name, ...rests) => {  // by using arrow function of spread operator
    //     let sum = 0;
    //     for (let i in rests) {
    //         sum += rests[i];
    //     }
    //     console.log(sum);
    //     console.log(name);
    // }
    // sum('akash bhoyar', ...arr1);
    // sum('pratik selokar', ...arr2); 


    // let obj1 = {fName:'Akash', lName:'Bhoyar'};
    // let obj2 = {address:'NGP', Mobile:8698273854};
    // let mergedObj = { ...obj1, ...obj2 };  // for merging to objects
    // let mergedObj = { id: 1,  ...obj1, ...obj2, age:25 };  // for merging to objects with single value 
    // const mergedObj = Object.assign(obj1, obj2);
    // console.log(mergedObj);


    // let obj1 = {
    //     name:"Ram",
    //     address: "NGP",
    //     age: 21,
    // }
    // const ak = { name: 'Akash', ...obj1 }; // updated the name easily inside object
    // const { name, ...obj3 } = obj1  // desrtucturing
    // console.log(ak, 'ak');
    // console.log(name, 'name'); // only name 
    // console.log(obj3, 'obj3'); // remaining all values
    

    //  Object literals

    // let name = "Akash Bhoyar";
    // let age = 25;
    // const obj1 = {
    //     name,
    //     age
    // }
    // console.log(obj1);


    // let n = "name"; // value define as a veriable
    // const obj1 = {
    //     [n]: "Akash Bhoyar",
    //     age: 25,
    //     details: function() {
    //         return `I am ${this.name} and ${this.age} yesrs old`
    //     }
    // }
    // console.log(obj1);
    // console.log(obj1.details());

    // let fname = "Akash"; // value define as a veriable
    // let lname= "Bhoyar";
    // let course = "B-Tech"

    // const student = (fname, lname, course) => {
    //     let fullName = `${fname} ${lname}`;
    //     return { fullName, course}
    // }
    // const ak = student(fname, lname, course);
    // console.log(ak);



    return (
        <>
            <h1>Spread Operator </h1>
        </>
    )
}
