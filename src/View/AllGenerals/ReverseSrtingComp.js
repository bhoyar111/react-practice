import React from 'react'

export default function ReverseSrtingComp() {

    // const reverseString = (str) => {
    //     let char = str.split('').reverse();
    //     return char.join('');
    //   } 
    //    const result = reverseString("Welcome Bhoyar saheb")
    //    console.log(result)

    // without any array method
    const reverseString = (str) => {
        let reverseStr = '';
        for ( let char of str ) {
            reverseStr = char + reverseStr;
        }
        return reverseStr;
    }

    const newString = reverseString('have a nice day!!!');
    console.log(newString);

    return (
        <div>ReverseSrtingComp</div>
    )
}
