import React from 'react'

export default function Promises() {
    
    // let completed = true;
    // let prom = new Promise(function(reslove, reject){
    //     if (completed) {
    //         reslove("I have done");
    //     } else {
    //         reject("I was fail");
    //     }
    // })
    // console.log(prom);


    // function promp(completed) {
    //     return new Promise(function(reslove, reject){
    //         if (completed) {
    //             reslove("I have done");
    //         } else {
    //             reject("I was fail");
    //         }
    //     })
    // }
    // console.log(promp(false));


    // function promp(completed) {
    //     return new Promise(function(resolve, reject) {
    //         console.log("Fetching data, please wait");
    //         setTimeout(() => {
    //             if (completed) {
    //                 resolve("I have done something");
    //             } else {
    //                 reject("I am failed");
    //             }
    //         }, 3000)
    //     })
    // }
    // promp(true).then((result) => {
    //     console.log(result);
    // })
    // .catch((err) => {
    //     console.log(err);
    // })


    // function sumOf(a, b){
    //     return new Promise((resolve,reject)=>{
    //         let sum = a + b;
    //         if(sum){
    //             resolve("Sum has been calculated: "+sum);
    //         } else { 
    //             reject("Only three elements or less are allowed");
    //         }
    //     })
    // }
    // console.log(sumOf(4, 50));

    // function sumOfElements(...elements){
    //     return new Promise((resolve,reject)=>{
    //         if(elements.length <= 3 ){
    //             let sum = 0;
    //             for(let i = 0; i < elements.length; i++){
    //                 sum += elements[i];
    //             }
    //             resolve("Sum has been calculated: "+sum);
    //         } else { 
    //             reject("Only three elements or less are allowed");
    //         }
    //     })
    // }
    // console.log(sumOfElements(30, 20, 10));

    return (
        <>
            <h1>Promises</h1>
        </>
    )
}
