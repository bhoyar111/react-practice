import React from 'react'

export default function ArrayObject() {

    // let arr = [10, 15, 20, 25, 10, 25, 30, 35, 15, 40];
    // let arrUniqeValue = [...new Set(arr)];  // remove duplicate value
    // console.log(arrUniqeValue);
    
    // let ages = [10, 15, 20, 25, 30, 35, 40];
    // console.log(Math.min(...ages))  // min value print
    // console.log(Math.max(...ages))  // max value print

    // const avg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
    // const result = avg(ages);
    // console.log(result);

    // let ak = {...ages} // define array values to print the zero index is 10 like 0: 10, 1: 15 like 
    // let ak = ages.indexOf(35, 2); // search index 1st put in value 35 and from 2 index
    // let ak = ages.lastIndexOf(35, 7); // search index 1st put in value 35 and from last 2 index
    // let ak = ages.includes(35); // find & check the value present or not present so getting true
    // let ak = ages.slice(2, 5); // find the values of given from 2 index to 5 index
    // ages.splice(2, 0, 17, 18); // adding 2 values of given index 2

    // let a = [10, 15];
    // let b = [20, 25, 30];
    // let d = a.concat(b, c) // concat for multi array
    // let d = b.join("") // perticular array values join together 
    // let d = [...a, ...b, ...c] // rest operator for multi array
    // console.log(ages)

    // const a = [10, 20, 30, 40, 50];
    // const b = a.toString();
    // const b = a.pop();
    // const b = a.reverse();
    // const b = a.sort();
    // const b = [1, 2]
    // console.log(typeof(b));

    //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //   const evenNumberSum = (arr) => {    // sum of even number
    //       let sum = 0;  
    //       for (let i = 1; i <= arr.length; i++) {
    //           if (i % 2 !== 0 ) {
    //               sum = sum + i
    //           }
    //       }
    //       console.log(sum);
    //   }
    //   evenNumberSum(arr);

    // let arr = [1, 3, 5, 7, 9, 11, 13, 17];
    // const evenNumberSum = (arr) => {    // missing 1st odd number 
    //     for (let i = 1; i <= arr.length; i++) {
    //         let current = arr[i];
    //         let next = current + 2;
    //         if(arr[i + 1] === next) continue;
    //         else {
    //                 console.log(next);
    //             break
    //         }
    //     }
    // }
    // evenNumberSum(arr);

    return (
        <>
            <h1>ArrayObject</h1>
        </>
    )
}
