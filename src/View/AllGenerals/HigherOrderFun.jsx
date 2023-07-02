import React from 'react'

export default function HigherOrderFun() {
    const numbers = [1, 2, 3, 4, 5, 6];
    // numbers.forEach((number) => console.log(number + 1));
    // const ak = numbers.map((number) => number * 2);
    // console.log(ak);
  
    
  //   const isEvenNum = (num) => {
  //     return num % 2 === 0;
  //   };
  // const ak = numbers.filter(isEvenNum);
  // console.log(ak);
  
  
      const sumReduce = (a, b) => {   // a=1, b=2 o/p=3, so will be now a=3 and b=3 o/p= 6
          return a + b;
      }
      const ak = numbers.reduce(sumReduce);
      console.log(ak);
      
    return (
        <>
            <h1>ArrayObject</h1>
        </>
    )
}
