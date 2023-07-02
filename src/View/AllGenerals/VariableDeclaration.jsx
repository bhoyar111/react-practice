import React from 'react'

export default function VariableDeclaration() {

     // console.log(a); // o/p is undefine because a is used before it was define  
    // var a = 10;

    // console.log(a); // o/p a is not define
    // let a = 10;

    // console.log(a) // reference error cannot a aceess before
    // const a = 10;

    // console.log(a, 'a');  // before declaration variable code is called as demprarar det zone for a variable
    // let a = 10;
    // var b = 20;
    // console.log(b);

    // syntax error for let //
    // let a = 100; // can't define same variable also value diffrent 
    // let a = 1000;
    // console.log(1);

    // but in var //
    // var a = 100;   // when var variable used for declaration that time
    // var a = 10000; // last value will be declare just like 10000 not first 100
    // console.log(a);

    // Const type error //
    // const a = 20;
    // a = 100; // TypeError: Assignment to constant variable.
    // const a = 200; // Parsing error: Identifier 'a' has already been declared
    // console.log(a);

    // let a = 0;
    // let b = false;
    // console.log(a==b, '1'); // true
    // console.log(a===b, '2'); // false

    // block scope//

    // {
    //     var a = 10;
    //     let b = 20;
    //     const c = 30;
    //     console.log(a, "1"); // o/p true
    //     console.log(b, "2"); // o/p true 
    //     console.log(c, "3"); // o/p true 
    // }
    //     console.log(a, "11"); // output a = 10
    //     console.log(b, "22"); // 'b' is not defined
    //     console.log(c, "33"); // 'c' is not defined


    const ak = () => {
        // console.log(a);  //  can not access before initialization when variable let and const is used
        // let a = 10;
        console.log(a);  // when var is used getting undefined
        var a = 10;

    }
    ak(); 

    return (
         <>
            <h1>Spread Operator </h1>
        </>
    )
}
