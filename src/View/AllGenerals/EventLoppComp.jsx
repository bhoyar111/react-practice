import React from 'react'

export default function EventLoppComp() {
    
     // for (let i = 0; i<100; i++) { // variable = let show o/p will be 0, 1, 2 so ..99
    //     setTimeout(function () {  // variable = var show o/p will be 100
    //         console.log(i)        // variable = const show o/p will be type error -> assign to contant variable
    //     }, 1000)
    // }

    
    // let arr = [3, 4, 5, 6];  // foo Concept
    // for(let i in arr) {        // up to 3 index value
    //     console.log(i, 'in');  // o/p will be 0,1,2,3
    // }
    // for (let i of arr) {       // from 1 value to last value
    //     console.log(i, 'of');  // o/p will be 3,4,5,6,
    // }
    // arr.foo = 'hi';


    // let a = [1, 10, 19, 20, 30, 40, 1, 10, 20, 30, 1, 50, 60];
    // let b = [...new Set(a)]; // skip duplicate value 1 is present multi so showing only one time
    // const c = [];
    // b.map((curr, ind) => {
    //     let subArray = [];
    //     for (let i = 0; i<a.length; i++) {
    //         if (curr === a[i]) {
    //             subArray.push(a[i])
    //         }
    //     }
    //     c.push(subArray)
    // })
    // console.log(c); // new array 1 is three time so showing like [1, 1, 1] all all values same

    
    // b.map((val, ind) => {
    //     let count = 0;
    //     for (let i=0; i<a.length; i++) {
    //         if (val === a[i]) {
    //             count = count + 1;
    //         }
    //     }
    //     c.push({val: count})
    // })
    // console.log(c);  // showing count of values 1 is three time like  index 0: {val: 3} 

    return (
        <>
            <h1>EventLoppComp</h1>
        </>
    )
}
