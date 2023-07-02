import React from 'react'

export default function Closers() {

    // is called as Closer //
    function x() {
        let a = 20;
        function y() {
            console.log(a);
        }
        y(); // invok y function
    }
    x(); // invok x function


  //   function A() {
  //     let a = 10;
  //     // console.log(a, '1'); // get the o/p
  //     // console.log(c, '1'); // c is not define 
  //     function B() {
  //         let c = 20;
  //         // console.log(a, '2'); // get the o/p
  //         // console.log(c, '2'); // get the o/p
  //     }
  //     B();
  //     // console.log(a, '3'); // get the o/p
  //     // console.log(c, '3'); // c is not define 
  // }
  // A();
  // console.log(a, '4'); // a is not define 
  // console.log(c, '4'); // c is not define 
  
    return (
        <>
            <h1>ArrayObject</h1>
        </>
    )
}
